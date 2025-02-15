const express = require('express')
const bodyParser = require('body-parser')
const AdminModel = require('../models/admin-model')
const router = express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send("Admin page")
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newAdmin=new AdminModel(req.body)
    newAdmin.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
})
router.get('/get/:id',(req,res)=>{
    AdminModel.findById(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
})
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body)
    AdminModel.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("Admin update page")
})
router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    AdminModel.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("Admin Delete page")
})
module.exports = router
