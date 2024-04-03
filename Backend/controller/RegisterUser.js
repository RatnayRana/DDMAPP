import UserAccount from '../Schema/UserRegister.db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const registerUser = async(req,res)=>{
    try{
        const { name, phone, password } = req.body; 
        console.log(name)
        const existingUser = await UserAccount.findOne({phone})
        
        if(existingUser){
            return res.status(400).json({message:"Your Account is already Registered"})
        }
        const hashpassword = await bcrypt.hash(password,13)
        try {
            const newUser = new UserAccount({name, phone, password:hashpassword});
            console.log(newUser);
            await newUser.save();
            console.log("successful");
            return res.status(200).json({message: "SuccessFull Registration"});
        } catch (error) {
            console.log("Unsuccessful", error.message);
            return res.status(400).json({message: "UnsuccessFull Registration. Please try it again"});
        }
        
    }
    catch(error){
        return res.status(400).json({
            success:false,
            msg: error.message
        })
    }
}

const loginUser = async(req,res)=>{
    try{
        const { phone, password } = req.body; 
        console.log(phone)
        const user = await UserAccount.findOne({phone:phone})
        if(!user) return res.status(400).json({message:"User does not exist"})
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid Credentials"})
        const token = jwt.sign({id:user._id},process.env.Scecret_Token)
        delete user.password
        console.log(token)
        res.status(200).json({token,user})
    }
    catch(error){
        return res.status(400).json({
            success:false,
            msg: error.message
        })
    }
}
export {
    registerUser,
    loginUser
};