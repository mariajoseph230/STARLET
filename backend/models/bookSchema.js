const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    Name:{type:String},
    Author:{type:String},
    Price:{type:Number},
    Description:{type:String}
})

const Book=mongoose.model("Book",bookSchema)

module.exports=Book