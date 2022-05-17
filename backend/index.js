import App from "./App.js";


// server connections declaraton
App.listen(process.env.PORT,()=>console.log(`server is running on PORT : ${process.env.PORT}`))