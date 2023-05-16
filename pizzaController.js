const Pizza=require('../models/pizzaModel')

const getLogin=(req,res)=>{

    res.json(Pizza.find())
}

const postLogin=async (req,res)=>{
    if(!req.body)
    {
        res.status(400)
        throw new Error("Bad request")
    }
    const Pizza=await Pizza.create(req.body)
    console.log(req.body)
    res.json(Pizza)
}



//get all pizza

const getAllPizza= async(req,res)=>{
    const pizza=  await Pizza.find()

    res.status(200).json({
        success:true,
        pizza
    })
}

//create pizza

const createPizza=async(req,res)=>{
    const pizza=await Pizza.create(req.body)
    res.status(200).json({
        success:true,
        pizza
    })
}


//update pizza

const updatePizza=async(req,res,next)=>{
    let pizza= await Pizza.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        useFindAndModify:false,
        runValidators:true
    })
    if(!pizza){
        throw new Error("details not found",404)
    }
    res.status(200).json({
        success:true,
        pizza
    })
}



//delete pizza

const deletePizza=async(req,res,next)=>{
    let pizza=await Pizza.findByIdAndDelete(req.params.id)

    if(!pizza){
        throw new Error("details incorrect",404)
    }
    res.status(200).json({
    message:"deleted"
    })
}

//get single pizza

const getOne= async(req,res,next)=>{
    const pizza=await Pizza.findById(req.params.id)

    if(!pizza){
        throw new Error("not found",404)
    }
    res.status(200).json({
        success:true,
        pizza
    })
}





module.exports={
    getLogin, postLogin, getAllPizza, createPizza, updatePizza, deletePizza, getOne
}
