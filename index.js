import {rateLimit} from "express-rate-limit";
import express from "express";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


const options = rateLimit({
    windowMs: 1 * 60 * 1000, 
	limit: 10,
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
})

app.use(options)

app.get("/", (request, response)=>{
    response.status(200).send("api is working")
})


app.listen(3001, ()=>{
    console.log("app is running totally fine")
})