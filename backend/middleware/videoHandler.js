import path from 'path'
import cloudinary from 'cloudinary'
import fs from 'fs'
import CatchAsyncError from "./CatchAsyncError.js";
import ErrorHandler from '../Utils/ErrorHandler.js';


const uploadVideoFile =async (videofile, next) => {
    try {
        

        await videofile.mv(`${path.resolve(`./backend/videos/${videofile.name}`)}`, err => {
            if (err) {
                return next(new ErrorHandler("video file uploading fail", 500))
            }
        })

       let data = await cloudinary.v2.uploader.upload(`${path.resolve(`./backend/videos/${videofile.name}`)}`, {
            resource_type: "video",
            folder: "videoFiles"
        });

        if (data) {
            fs.unlink(`${path.resolve(`./backend/videos/${videofile.name}`)}`, (err) => {

                if (err) return next(new ErrorHandler("video file uploading fail", 500))
            })
            data = {
                public_id:data.public_id,
                url:data.secure_url
            }
            return data;
        } else {
            return next(new ErrorHandler("video file uploading fail", 500))
        }
    
       


    } catch (error) {
        return next(new ErrorHandler("video file uploading fail", 500))
    }
}

 const uploadImageFile = async(imageFile,folder,next )=>{
     try {
        const myCloud = await cloudinary.v2.uploader.upload(imageFile, {
            folder: folder,
          });

          if(!myCloud) return next( new ErrorHandler("thumbnail upload fail !",500))

          return myCloud;

     } catch (error) {

        return next( new ErrorHandler("thumbnail upload fail !",500))
         
     }

}

export { uploadVideoFile ,uploadImageFile}