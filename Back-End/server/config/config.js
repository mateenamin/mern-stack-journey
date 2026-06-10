import "dotenv/config"; 
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]); // Yeh line aapke internet ke block ko bypass karegi


import mongoose from "mongoose";


// MongoDB Atlas ki connection string (Topic 6)
// const DB_URL = "mongodb+srv://mateenamin1122:mateen123@cluster0.4ws3yeh.mongodb.net/?appName=Cluster0"
const  DB_URL = process.env.DB_URL




// Database connect karne ka function
async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully with MongoDB Atlas! ");
  } catch (error) {
    console.error("Database connection failed.", error.message);
  }
}



// Is function ko export kar diya taake server.js isko use kar sake
export default connectDB;