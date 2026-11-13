import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true},categories:[String],zones:[String],capacity:{type:Number,default:5},currentWorkload:{type:Number,default:0},availability:{type:Boolean,default:true},status:{type:String,enum:['Active','Inactive','Full'],default:'Active'}},{timestamps:true});
export default mongoose.model('Handler',schema);
