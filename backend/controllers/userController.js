import ErrorHandler from "../Utils/ErrorHandler.js";
import CatchAsyncError from "../middleware/CatchAsyncError.js";
import User from '../models/userModel.js'
import sendToken from "../Utils/jwtToken.js";


const userLogin = CatchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body;
   if(!email || !password) return next(new ErrorHandler("Please Enter Email And Password !",400))
    
   const user = await User.findOne({email}).select("+password");

   if(!user) return next(new ErrorHandler("User Doesn't Exist !",401))
   
   const isPasswordMatched = await user.comparePassword(password);

   if(!isPasswordMatched) return next(new ErrorHandler("Invalid Password",401))

   sendToken(user,200,res)

});

const userRegister = CatchAsyncError(async(req,res,next)=>{

    const {name,email,password} = req.body;

    const user = await User.create({name,email,password})
    // console.log(user);
    if(!user) return next( new ErrorHandler("user not created",404))


   sendToken(user,201,res);
})

const logout = CatchAsyncError( async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    })
})

export {userLogin,userRegister,logout};