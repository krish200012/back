const Outlets=require('../models/outletsModel')

const getOutlets=async (req,res)=>{
    const outlet=await Outlets.find()
    res.status(200).json({success:true,outlet})
}

const createOutlet=async(req,res)=>{
    const outlet=  await Outlets.create(req.body)

    res.status(200).json({
        success:true,
        outlet
    })
}

const updateOutlet=async(req,res,next)=>{
    console.log(req.params.id, req.body)
    let outlet= await Outlets.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        useFindAndModify:false,
        runValidators:true
    })
    if(!outlet){
        throw new Error("details not found",404)
    }
    res.status(200).json({
        success:true,
        outlet
    })
} 

const deleteOutlet=async(req,res)=>{
    let outlet=await Outlets.findByIdAndDelete(req.params.id)

    if(!outlet){
        throw new Error("details incorrect",404)
    }
    res.status(200).json({
    message:"deleted"
    })
}

const getOne=async(req,res)=>{
    const outlet=await Outlets.findById(req.params.id)

    if(!outlet){
        throw new Error("not found",404)
    }
    res.status(200).json({
        success:true,
        outlet
})}

module.exports={getOutlets, createOutlet, updateOutlet, deleteOutlet, getOne}
