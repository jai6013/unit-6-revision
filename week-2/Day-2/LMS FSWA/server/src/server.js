// imports

const express = require('express')
const app = express()
const connect = require("./configs/db")
const cors = require("cors")
const studentsController = require('./controllers/student.controller')
const contestController = require('./controllers/contest.controller')
const userController = require('./controllers/user.controller')
// middlewares

app.use(cors())
app.use(express.json())

// routes
app.use("/students", studentsController)
app.use("/contests", contestController)
app.use("/users", userController)
// listen

app.listen(2345, async () =>{
    try{
        await connect()
        console.log("listening 2345")
    }catch(err){
        console.log(err)
    }
})