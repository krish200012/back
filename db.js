const mongoose=require('mongoose');

const connectDB=mongoose.connect("mongodb://localhost:27017/Pizza",{useNewUrlParser: true, useUnifiedTopology:true}).then(()=>{
    console.log('connected to MongoDB')
}).catch((err)=>{
    console.log("err")
})
module.exports=connectDB
