const router = require("express").Router()
const User = require('../models/User.model')


// sign in

router.post("/signin", async(req,res)=>{   
    try{
        const user = await User.findOne({$and : [{username :req.body.username}, {password:req.body.password}]})
        if(user.role === "admin"){
            return res.status(200).send("admintoken")
        }else{
            return res.status(200).send("studenttoken")
        }
    }catch(err){
        return res.status(401).send(err)
    }
})

// post admin or student

router.post("/signup", async(req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)
    }catch(err){
        return res.status(401).send(err)
    }
})


module.exports = router