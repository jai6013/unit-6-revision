const mongoose = require("mongoose")

const contestSchema = new mongoose.Schema({
    title:{type:String},
    type:{type:String},
    time:{type:String},
    deadline:{type:String},
    tags:{type:Array}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("contest", contestSchema )