const express=require("express")
const dotenv=require("dotenv")

const router= require("./Router/Testrouter")
const connectDB= require("./database/db")
const cors=require("cors")
connectDB()

dotenv.config()
const app=express()
app.use(express.json());
app.use(cors())
app.use("/user",router)

const PORT= process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT} `));