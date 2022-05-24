import cloudinary from "cloudinary"
import App from "./App.js";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
// server connections declaraton
App.listen(process.env.PORT,()=>console.log(`server is running on PORT : ${process.env.PORT}`))