
const User=require("../models/bookSchema")

const schemafunction2=async(req,res)=>{
    const{Name,Author,Price,Description}=req.body

    const userDetails=await User.create({
        Name,
        Author,Price,Description
    })

    console.log("books data")
    res.json(userDetails)
}
module.exports=schemafunction2