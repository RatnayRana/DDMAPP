import dotenv from 'dotenv'
import express from 'express'
import connectDB from '../Backend/connectToDB/MongoConnectionDB.js'
dotenv.config()
const app = express()
connectDB()


app.listen(process.env.PortNumber,(req,res)=>{
    console.log(`app is listening to the ${process.env.PortNumber}`)
})