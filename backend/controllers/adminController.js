import cloudinary from 'cloudinary'
import ErrorHandler from "../Utils/ErrorHandler.js";
import CatchAsyncError from "../middleware/CatchAsyncError.js";
import User from '../models/userModel.js'
import Admin from '../models/adminModel.js'
import {sendTokenAdmin} from "../Utils/jwtToken.js";


const adminLogin = CatchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body;
   if(!email || !password) return next(new ErrorHandler("Please Enter Email And Password !",400))
    
   const admin = await Admin.findOne({email}).select("+password");

   if(!admin) return next(new ErrorHandler("User Doesn't Exist !",401))
   
   const isPasswordMatched = await admin.comparePassword(password);

   if(!isPasswordMatched) return next(new ErrorHandler("Invalid Password",401))

   sendTokenAdmin(admin,200,res)

});

const adminRegister = CatchAsyncError(async(req,res,next)=>{

    const {email,password} = req.body;

    const admin = await Admin.create({email,password})

    if(!admin) return next( new ErrorHandler("user not created",404))


    sendTokenAdmin(admin,201,res);
})

const logout = CatchAsyncError( async(req,res,next)=>{
    res.status(201).cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    }).json({
        success:true,
    })
})

const getAllUsers =CatchAsyncError(async(req,res,next)=>{

    const users = await User.find()

    res.status(200).json({
        success:true,
        users
    })

})

export {adminLogin,adminRegister,logout,getAllUsers}