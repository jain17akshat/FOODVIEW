const mongoose=require("mongoose")


function connectDB(){
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("MongooDB is connected");
        
    })
    .catch((err)=>{
        console.log("MongooDB is not connected");
        
    })
}
module.exports=connectDB;