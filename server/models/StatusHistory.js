import mongoose from 'mongoose';
const schema=new mongoose.Schema({reportId:{type:mongoose.Schema.Types.ObjectId,ref:'Report',required:true},oldStatus:String,newStatus:String,changedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},comment:String,timestamp:{type:Date,default:Date.now}});
export default mongoose.model('StatusHistory',schema);
