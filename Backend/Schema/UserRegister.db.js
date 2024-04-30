import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    UerRoles:{
        type:String,
    
        enum:["User","Admin"],
        default:"User"
    }

})
const UserAccount = mongoose.model("Registration", userSchema);

export default UserAccount