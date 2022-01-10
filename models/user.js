import mongoose  from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    password:{type:String,required:true}
},{timestamps:true});

export default mongoose.model('User',userSchema,'users')
