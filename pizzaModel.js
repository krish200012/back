const mongoose=require('mongoose')

const pizzaSchema=mongoose.Schema({
    
    name:{
        type: String,
        require: true,
    },
    size:[],
    prices:[],
    type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

},{timestamps: true})

module.exports=mongoose.model("pizza",pizzaSchema)
