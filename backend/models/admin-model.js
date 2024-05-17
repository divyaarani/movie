const mongoose=require('mongoose')
const AdminSchema=new mongoose.Schema({
image:String,
name:String,
details:String,
year:Number,
director: String,
cast:String
})
const AdminModel=mongoose.model('admin',AdminSchema)
module.exports=AdminModel