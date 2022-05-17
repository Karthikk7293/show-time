import  ErrorHandler from "../Utils/ErrorHandler.js";

export default function (err,req,res,next){


    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"
    
    res.status(err.statusCode).json({
        success:false,
        status:err.statusCode,
        error:err.message
    })

}
 
