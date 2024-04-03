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

})
const UserAccount = mongoose.model("Registration", userSchema);

export default UserAccount