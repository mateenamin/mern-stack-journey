import "dotenv/config"; 
import express from "express"
import connectDB from "./config/config.js"; // 👈 Step B: Database file ko import ki
import router from "./routes/index.route.js";
import logger from "./middleware/logger.middleware.js";

const app = express()
const PORT = process.env.PORT
// 🔌 Database wale switch ko daba diya (Function call kar diya)
connectDB();


app.use(express.json());
                
//     (Global Level)
  app.use(logger)      
app.use('/api/v1', router);


app.get( "/" ,(req ,res)=>{
res.json({message : "Server chal raha hai!"})
})


app.listen(PORT ,()=>{
    console.log(`Server chal raha hai: http://localhost:${PORT}`)
})