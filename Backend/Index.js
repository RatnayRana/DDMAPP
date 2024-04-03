import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB from '../Backend/connectToDB/MongoConnectionDB.js';
import userRouter from '../Backend/Router/User.Router.js';

dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
connectDB();

app.use("/users", userRouter);

app.listen(process.env.PortNumber, () => {
    console.log(`App is listening on port ${process.env.PortNumber}`);
});











// import dotenv from 'dotenv'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import express from 'express'
// import connectDB from '../Backend/connectToDB/MongoConnectionDB.js'
// import userRouter from '../Backend/Router/User.Router.js'
// // import {userRegister} from '../Backend/MainBackendCode/Register.js'
// dotenv.config()
// const app = express()
// app.use(cors({origin: true, credentials: true}));
// app.use(express.json());
// connectDB()

// app.use("/users",userRouter)
// // app.post("/register",async(req,res)=>{
// //     const { name, phone, password } = req.body; 
// //     console.log(name, phone, password);
// //     console.log("helpp")
// // })

// app.listen(process.env.PortNumber,(req,res)=>{
//     console.log(`app is listening to the ${process.env.PortNumber}`)
// })