const User = require("../models/userloginSchema")

const jwt=require("jsonwebtoken")
const generatefun=async(req,res)=>{
    const {Email,Password}=req.body
   
    const userDetails=await User.create({
    
    
        Email,
        Password
    })

    res.json({

        Id:userDetails._id,
        Email:userDetails.Email,
        Password:userDetails.Password,
        Token:generateToken(userDetails._id)
    })
}
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}

module.exports=generatefun