import cloudinary from 'cloudinary'
import Content from "../models/contentModel.js";
import User from '../models/userModel.js'
import CatchAsyncError from '../middleware/CatchAsyncError.js'
import ErrorHandler from '../Utils/ErrorHandler.js';
import { uploadVideoFile ,uploadImageFile } from '../middleware/videoHandler.js';


const createContent = CatchAsyncError(async (req, res,next) => {
  try { 
    const movie={
                 id:req.body.id,
                 original_title:req.body.original_title,
                 overview:req.body.overview,
                 poster_path:req.body.poster_path,
                 release_date:req.body.release_date,
                 backdrop_path:req.body.backdrop_path,
                 popularity:req.body.popularity,
                 original_language:req.body.original_language,
                 video:req.body.video,
                 vote_average:req.body.vote_average,
                 vote_count:req.body.vote_count,
                 adult:req.body.adult
    }

     const videoFile = await uploadVideoFile(req.files.video,next)
     const imageFile = await uploadImageFile(req.body.image,"thumbnails",next)
    
  
    const content = await Content.create({
      title: req.body.title,
      description: req.body.description,
      thumbnail: {
        public_id: imageFile.public_id,
        url: imageFile.secure_url,
      },
      content:{
        public_id: videoFile.public_id,
        url: videoFile.url,
      },
      owner: req.user._id,
      movie: movie
    })
    const user = await User.findById(req.user._id)

    user.content.unshift(content._id)

    await user.save();
    res.status(201).json({
      success: true,
      message: "Content created",
    });

  } catch (error) {
    console.log(error);
  }
})

const getAllContents = CatchAsyncError(async (req, res) => {
  try {

    const contents = await Content.find()

    res.status(201).json({
      success: true,
      contents,
      count: contents.length
    })

  } catch (error) {

  }
})

const likeAndDislike = CatchAsyncError(async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id);

    if (!content) return next(new ErrorHandler("Content not found !", 404))

    if (content.likes.includes(req.user._id)) {
      const index = content.likes.indexOf(req.user._id);

      content.likes.splice(index, 1);

      await content.save();

      return res.status(200).json({
        success: true,
        message: "Content Unliked",
        content
      });
    } else {
      content.likes.push(req.user._id);

      await content.save();

      return res.status(200).json({
        success: true,
        message: "Content Liked",
        content
      });
    }

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

})

const getSingleContent = CatchAsyncError(async (req, res, next) => {
  try {
    const content = await Content.findById(req.params.id)
    
    if (!content) return next(new ErrorHandler("Content not Found !", 404))
    
    res.status(200).json({
      success: true,
      content
    })

  } catch (error) {

    return next(new ErrorHandler(error.message, 500))

  }
})

const addComment = CatchAsyncError( async(req,res,next)=>{
 try {
  const {comment} = req.body;
  
  const content = await Content.findById(req.params.id)

  if(!content) return next(new ErrorHandler("video not found! ",404))

  content.comments.push({
    user: req.user._id,
    comment: comment,
  })

  await content.save()

  res.status(200).json({
    success:true,
    message:"comment added successfully !"
  })
   
 } catch (error) {
  return next(new ErrorHandler(error.message, 500))
 }

})



const getPopularContents = CatchAsyncError(async (req,res,next)=>{
  try {
    const {contentId} = req.body;
    
    const content = await Content.find()
    const contents = content.filter((video)=>video.movie.id===req.params.id && video._id !=contentId)
    
    res.status(201).json({
      success:true,
      count:contents.length,
      contents,
    })
    
  
  } catch (error) {
    return next(new ErrorHandler(error, 500))
  }
})

const getSuggestedPost = CatchAsyncError( async (req,res,next)=>{
  try {
    let contents = await Content.find().sort({createdAt:-1})

       res.status(201).json({
         contents,
         success:true
       })
  } catch (error) {
    return next(new ErrorHandler(error, 500))
  }
})

const getChannelDetails = CatchAsyncError( async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id)
    const channel = {
      avatar:user.avatar.url,
      channel:user.channel,
      about:user.about,
      subscribers:user.subscribers
    }
   res.status(200).json({
    success:true,
    channel
   })
  } catch (error) {
      return next(new ErrorHandler(error, 500))
  }
})

const subscribeChannel = CatchAsyncError( async (req,res,next)=>{
  try {
    const channel = await User.findById(req.params.id)
     
    if(!channel) return next(new ErrorHandler("channel not found ! ",404))

    if(channel.subscribers.includes(req.user._id)){

      const index = channel.subscribers.indexOf(req.user._id)
      
      channel.subscribers.splice(index,1);

      await channel.save()

      return res.status(200).json({
        success: true,
        message: " Un Subcribed"
      });

    }else{
      channel.subscribers.push(req.user._id)

      await channel.save()

      return res.status(200).json({
        success: true,
        message: "Subcribed"
      });
    }
    
  } catch (error) {

     res.status(500).json({
      success: false,
      message: error.message,
    });
  }

})

export { createContent, getAllContents, likeAndDislike, getSingleContent , addComment, getPopularContents,getSuggestedPost,getChannelDetails,subscribeChannel}