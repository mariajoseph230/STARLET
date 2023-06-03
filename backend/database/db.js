const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://mj504948:0128022211aabb@cluster0.2vx9z9n.mongodb.net/",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        
console.log("Database connected")

    }catch(error){
        console.log(`Error: ${error}`)
        process.exit();
    }
}

module.exports=connectDB;