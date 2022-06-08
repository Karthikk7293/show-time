import cloudinary from 'cloudinary'
import Content from "../models/contentModel.js";
import User from '../models/userModel.js'
import CatchAsyncError from '../middleware/CatchAsyncError.js'
import ErrorHandler from '../Utils/ErrorHandler.js';


const createContent = CatchAsyncError(async (req, res) => {
try {
    

    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "thumbnails",
      });
      
      
      const content = await Content.create({
        title:req.body.title,
        description:req.body.description,
        thumbnail: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
        owner: req.user._id,
        movie:req.body.movie
      })

      const user = await User.findById(req.user._id)

      user.content.unshift(content._id)

      await user.save();
    res.status(201).json({
      success: true,
      message: "Content created",
      content
    });
      
} catch (error) {
    console.log(error );
}
})

const getAllContents = CatchAsyncError(async (req,res)=>{
  try {

    const contents = await Content.find()

    res.status(201).json({
      success:true,
      contents,
      count:contents.length
    })
    
  } catch (error) {
    
  }
})

const likeAndDislike = CatchAsyncError( async (req,res,next)=>{
  try {
    const content = await Content.findById(req.params.id);

    if (!content) return next(new ErrorHandler("Content not found !",404))

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

const getSingleContent = CatchAsyncError( async(req,res,next)=>{
  try {

    const content = Content.findById(req.params.id)

    if(!content) return next(new ErrorHandler)
    
  } catch (error) {
    
  }
})

export { createContent ,getAllContents,likeAndDislike,getSingleContent}