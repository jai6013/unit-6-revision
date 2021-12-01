const router = require('express').Router()
const Student = require('../models/Students.model')

// post a new student
router.post("/", async(req,res)=>{
    try{
        const student = await Student.create(req.body)
        return res.status(201).send({data: student})
    }catch(err){
        return res.status(400).send(err)
    }
});

// get all the students 
router.get("/", async(req,res)=>{
    try{
        const students = await Student.find().lean().exec()
        return res.status(201).send(students)
    }catch(err){
        return res.status(401).send(err)
    }
})

// sort the students by name and age
router.get("/sortasc", async(req,res)=>{
    
    try{
        const students = await Student.find().sort({name:1}).lean().exec()
        return res.status(200).send(students)
    }catch(err){
        return res.status(400).send(err)
    }
})
router.get("/sortdsc", async(req,res)=>{
    
    try{
        const students = await Student.find().sort({name:-1}).lean().exec()
        return res.status(200).send(students)
    }catch(err){
        return res.status(400).send(err)
    }
})

// age
router.get("/agesortasc", async(req,res)=>{
    console.log("ageworkign")
    try{
        const students = await Student.find().sort({age:1}).lean().exec()
        return res.status(200).send(students)
    }catch(err){
        return res.status(400).send(err)
    }
})
router.get("/agesortdsc", async(req,res)=>{
    
    try{
        const students = await Student.find().sort({age:-1}).lean().exec()
        return res.status(200).send(students)
    }catch(err){
        return res.status(400).send(err)
    }
})

//delete a student
router.delete("/:id", async(req,res)=>{
    try{
        await Student.findByIdAndDelete(req.params.id)
        const students = await Student.find().lean().exec()
        return res.status(200).send(students)
    }catch(err){
        return res.status(401).send(err)
    }
})

module.exports = router