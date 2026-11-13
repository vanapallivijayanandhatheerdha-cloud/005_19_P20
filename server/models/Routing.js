import mongoose from 'mongoose';
const schema=new mongoose.Schema({reportId:{type:mongoose.Schema.Types.ObjectId,ref:'Report',required:true},handlerId:{type:mongoose.Schema.Types.ObjectId,ref:'Handler'},routingScore:Number,reason:[String],assignedAt:Date,backupHandler:{type:mongoose.Schema.Types.ObjectId,ref:'Handler'},escalated:Boolean},{timestamps:true});
export default mongoose.model('Routing',schema);
