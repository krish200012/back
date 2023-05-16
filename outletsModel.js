const mongoose=require('mongoose')

const outletsSchema=mongoose.Schema({
    
    city:{
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    pincode:{
        type: String,
        require: true,
    },
    status:{
        type: String,
        require: true,
    },
    type:{
        type:String,
        required:true
    }

},{timestamps: true})

module.exports=mongoose.model("outlets",outletsSchema)
