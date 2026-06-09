import express from "express"
import router from "./routes/index.route.js";

const app = express()


const PORT = 5000


app.use(express.json());

app.use('/api/v1', router);


app.get( "/" ,(req ,res)=>{
res.json({message : "Server chal raha hai!"})
})


app.listen(PORT ,()=>{
    console.log(`Server chal raha hai: http://localhost:${PORT}`)
})