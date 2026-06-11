import "dotenv/config"; 
import express from "express"
import connectDB from "./config/config.js"; // 👈 Step B: Database file ko import ki
import router from "./routes/index.route.js";
import logger from "./middleware/logger.middleware.js";
import adminSeeder from "./seeders/admin.seeder.js"


const app = express()
const PORT = process.env.PORT



app.use(express.json());
                
//     (Global Level)
  app.use(logger)      
app.use('/api/v1', router);


// app.get( "/" ,(req ,res)=>{
// res.json({message : "Server chal raha hai!"})
// })

// 🔌 Database wale switch ko daba diya (Function call kar diya)
connectDB().then(async () => {
  await adminSeeder() // ← Admin banao
  app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
  })
})