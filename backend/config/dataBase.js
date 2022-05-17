import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = async()=>{
    try {
const connect = await mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
        console.log(`MongoDB Conneted to :${connect.connection.host}`);
    } catch (error) {
    }
}

export default connectDatabase;