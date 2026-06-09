import express from "express"

const app = express()


const PORT = 5000


app.use(express.json())


app.get( "/" ,(req ,res)=>{
res.json({message : "Server chal raha hai!"})
})


app.listen(PORT ,()=>{
    console.log(`Server chal raha hai: http://localhost:${PORT}`)
})