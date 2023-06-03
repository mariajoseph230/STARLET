const mongoose=require("mongoose")

const userloginSchema=mongoose.Schema({
    Email:{type:String},
    Password:{type:String},
})

const User=mongoose.model("User",userloginSchema)

module.exports= User