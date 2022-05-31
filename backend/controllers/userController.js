import cloudinary from 'cloudinary'
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
    res.status(201).cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    }).json({
        success:true,
    })
})

const updateProfile  = CatchAsyncError( async (req,res)=>{
    // console.log(req.user);
    const newUserData = {
        name: req.body.name || req.user.name,
        email: req.body.email || req.user.email
      };
    
      if (req.body.image !== "") {
          
        const user = await User.findById(req.user.id);
    
        const imageId = user.avatar.public_id;
       
            await cloudinary.v2.uploader.destroy(imageId);
    
        const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
          folder: "users-avatars",
          width: 150,
          crop: "scale",
        })
    
        newUserData.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }else{

          console.log(req.body.image);
        const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
            folder: "users-avatars",
            width: 150,
            crop: "scale",
          })

          newUserData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };

      }
    
      const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        user
        
      });


    })

    const getUserDetails = CatchAsyncError(async(req,res)=>{
        const user = User.findById(req.user.id)
        if(!user) return next(new ErrorHandler("oops! user not found",404))

        res.status(201).json({
            user
        })
    })

export {userLogin,userRegister,logout,updateProfile,getUserDetails};