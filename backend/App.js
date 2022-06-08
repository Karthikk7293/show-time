import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import cloudinary from 'cloudinary'
// import multer from 'multer'
// import fs from 'fs'

// import and involking database connections
import connectDatabase from "./config/dataBase.js";
connectDatabase();

// error handlers
import errorMiddleWare from "./middleware/Error.js";

// import all routers form router folder
import userRouter from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';
import contentRouter from './routes/contentRouter.js';
import adProviderRouter from './routes/adProviderRoutes.js'
// import path from 'path'



// middlewares
dotenv.config();
const App = express();

App.use(cors());
App.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
App.use(express.json({limit:"50mb"}));
App.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));




//routes declerations and seperations
App.use("/api/user/",userRouter);
App.use("/api/admin/",adminRouter);
App.use("/api/content/",contentRouter);
App.use("/api/ad-providers",adProviderRouter);









App.post('/api/content/video',async(req,res)=>{
    // req.files.files.path="./uploads"
 console.log(req.files)
    cloudinary.v2.uploader.upload(req.files, 
    { resource_type: "video", 
      public_id: "myfolder/mysubfolder/",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
        { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
      eager_async: true,
      eager_notification_url: "https://mysite.example.com/notify_endpoint" },
    );
  });
// })

// error handle middleware 
App.use(errorMiddleWare)

export default App;