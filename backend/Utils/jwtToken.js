// create Token and saving in cookie

const sendTokenUser = (user,statusCode,res)=>{
    
    const token = user.getJWTToken();

    const options = {
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true,
    };
    res.status(statusCode).cookie("userToken",token,options).json({
        success:true,
        user,
        token
    })
}

const sendTokenAdmin = (admin,statusCode,res)=>{
    
    const token = admin.getJWTToken();

    const options = {
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true,
    };
    res.status(statusCode).cookie("adminToken",token,options).json({
        success:true,
        admin,
        token
    })
}

export {sendTokenAdmin,sendTokenUser};