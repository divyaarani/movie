 const express=require('express')
 const admins=require('./routes/admin')
 const mongoose=require('mongoose')
 const cors=require('cors')
 const app=express()
 app.use(cors())
  mongoose.connect('mongodb://127.0.0.1:27017/MovieBook')
   mongoose.connection.on('connected',()=>{
    console.log("MongoDB successfully connected")
 })
  app.get('/',(req,res)=>{
  res.send("Backend server")
})
 app.use('/admin',admins)
  app.listen(3001,()=>{
    console.log("Server is running");
  })