const mongoose=require("mongoose")

const usersignupSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},
})

const User=mongoose.model("User",usersignupSchema)

module.exports= User
