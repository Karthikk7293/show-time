import JWT from "jsonwebtoken";
import ErrorHandler from "../Utils/ErrorHandler.js";
import CatchAsyncError from "./CatchAsyncError.js";
import User from "../models/userModel.js";
import Admin from "../models/adminModel.js";

const authenticatedUser = CatchAsyncError(async (req, res, next) => {
    let {userToken} = req.cookies
    if (userToken) {
        if (!userToken) return next(new ErrorHandler("Please Login to access this resource", 401))

        const decodeData = JWT.verify(userToken, process.env.JWT_SECRET)

        const user = await User.findById(decodeData.id)

        if (!user) return next(new ErrorHandler("User Varification failed use another account to login", 401))

        if (user.isBlocked) return next(new ErrorHandler(" Sorry ! Your Athentication is failed", 401))

        req.user = user

        next();
    } else {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

})

const authenticatedAdmin = CatchAsyncError(async (req, res, next) => {
    let {adminToken} = req.cookies
    if (adminToken) {
        if (!adminToken) return next(new ErrorHandler("Please Login to access this resource", 401))

        const decodeData = JWT.verify(adminToken, process.env.JWT_SECRET)

        const admin = await Admin.findById(decodeData.id)

        if (!admin) return next(new ErrorHandler("User Varification failed use another account to login", 401))

        req.admin = admin

        next();
    } else {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

})

export { authenticatedUser, authenticatedAdmin }