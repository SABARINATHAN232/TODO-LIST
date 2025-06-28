
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB } = process.env;

// MongoDB Atlas connection URI
const uri = `mongodb+srv://sabari24082005:Kongu%40200@cluster0.zrsnvlo.mongodb.net/Taskmanager`; 


export const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ DB CONNECTED');
  } catch (err) {

    console.error('❌ DB CONNECTION ERROR:', err);
  }
};
