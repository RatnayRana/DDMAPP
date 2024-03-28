import dotenv from 'dotenv'
import express from 'express'
import connectDB from '../Backend/connectToDB/MongoConnectionDB.js'
import userRouter from '../Backend/Router/User.Router.js'
// import {userRegister} from '../Backend/MainBackendCode/Register.js'
dotenv.config()
const app = express()
connectDB()

app.use("/",userRouter) 

app.listen(process.env.PortNumber,(req,res)=>{
    console.log(`app is listening to the ${process.env.PortNumber}`)
})