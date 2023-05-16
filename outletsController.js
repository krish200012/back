const Outlets=require('../models/outletsModel')

const getOutlets=async (req,res)=>{
    const outlet=await Outlets.find()
    res.status(200).json({success:true,outlet})
}

const createOutlet=async(req,res)=>{

}

const updateOutlet=async(req,res)=>{

}

const deleteOutlet=async(req,res)=>{

}

const getOne=async(req,res)=>{

}




module.exports={getOutlets, createOutlet, updateOutlet, deleteOutlet, getOne}
