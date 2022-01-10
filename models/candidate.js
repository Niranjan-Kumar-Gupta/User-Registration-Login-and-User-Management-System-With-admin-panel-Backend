import mongoose  from "mongoose";

const { Schema } = mongoose;

const CandidateSchema = new Schema({
    name:{type:String,required:true},
    dateOfBirth:{type:String,required:true},
    age:{type:Number,required:true},
    address:{type:String,required:true},
    state:{type:String,required:true},
    pinCode:{type:Number,required:true},
},{timestamps:true});

export default mongoose.model('Candidate',CandidateSchema,'candidates')
