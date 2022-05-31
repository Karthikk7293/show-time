import JWT from "jsonwebtoken";
import ErrorHandler from "../Utils/ErrorHandler.js";
import CatchAsyncError from "./CatchAsyncError.js";
import User from "../models/userModel.js";

const authenticatedUser = CatchAsyncError(async (req, res, next) => {
    let token = req.headers.cookie
    token=token.split("=")[1]
  
    if (!token) return next(new ErrorHandler("Please Login to access this resource", 401))

    const decodeData = JWT.verify(token,process.env.JWT_SECRET)

    const user = await User.findById(decodeData.id)

 if(!user) return next(new ErrorHandler("User Varification failed use another account to login", 401))
    
    next();

})

export { authenticatedUser }