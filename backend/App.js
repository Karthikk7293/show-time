import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import path from 'path'
import fs from 'fs'

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



// middlewares
dotenv.config();
const App = express();

App.use(cors());
App.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
App.use(express.json({limit:"50mb"}));
App.use(cookieParser())
App.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));




//routes declerations and seperations
App.use("/api/user/",userRouter);
App.use("/api/admin/",adminRouter);
App.use("/api/content/",contentRouter);
App.use("/api/ad-providers",adProviderRouter);



const __dirname = path.resolve()
App.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  App.use(express.static(path.join(__dirname, '/frontend/build')))

  App.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  App.get('/', (req, res) => {
    res.send('API is running....')
  })
}



// error handle middleware 
App.use(errorMiddleWare)

export default App;