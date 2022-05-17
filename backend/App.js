import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
// import and involking database connections
import connectDatabase from "./config/dataBase.js";
connectDatabase();

// error handlers
import errorMiddleWare from "./middleware/Error.js";

// import all routers form router folder
import userRouter from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';
import contentCreatorRouter from './routes/contentCreatorRouter.js';
import adProviderRouter from './routes/adProviderRoutes.js'



// middlewares
dotenv.config();
const App = express();

App.use(cors());
App.use(bodyParser.urlencoded({extended:true}))
App.use(express.json({limit:"50mb"}));




//routes declerations and seperations
App.use("/api/user/",userRouter);
App.use("/api/admin",adminRouter);
App.use("/api/content-creator",contentCreatorRouter);
App.use("/api/ad-providers",adProviderRouter);


// error handle middleware 
App.use(errorMiddleWare)

export default App;