import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import CRYPTO from 'crypto'


const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Please Enter Your Name!"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email!"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password!"],
        minLength: [6, "Password should be greater than 8 characters"],
    },
    avatar: {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    createdAt:{
        type:Date,
        default:Date.now,

    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})

adminSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);

})

// JWT TOKEN

adminSchema.methods.getJWTToken = function (){
    return JWT.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    });
}

// COMPARE PASSWORD

adminSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}


// generating password reset token 
adminSchema.methods.getResetPasswordToken = function (){
    // generating token 
    const resetToken = CRYPTO.randomBytes(20).toString("hex");

    this.resetPasswordToken = CRYPTO.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire = Date.now()+ 1*60*1000;
    return resetToken;
}
  

export default mongoose.model("Admin",adminSchema);