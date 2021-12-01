const mongoose = require('mongoose')

const signUpSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
},
{
    versionKey:false,timestamps:false
})

module.exports = mongoose.model("user", signUpSchema)