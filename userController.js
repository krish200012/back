const bcrypt=require('bcryptjs')
const User=require('../models/userModel')

const userRegister=async (req,res)=>{
    const {name, email, password}=req.body

    if (!name || !email || !password)
    {
        res.status(400)
        throw new Error("Enter all the Required Fields")
    }
    const userExist=await User.findOne({email})

    if(userExist)
    {
        res.status(400)
        res.json({message:"User already exists"})
        throw new Error("User Already Exists")
    }
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password, salt)

    const user=await User.create({
        name, 
        email, 
        password: hashedPassword
    })

    if(user)
    {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email:user.email
        })
    }
    else{
        res.json({message:"User already exists"})
        throw new Error("Invalid user data")
    }
}

const userLogin=async (req,res)=>{
    const {email, password}=req.body
    const user= await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password)))
    {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            access: user.access   
        })
        console.log(user)
    }

    else{
        res.status(401)
        res.json({message:"Invalid Credentials"})
        throw new Error("Invalid Credential")
    }
}
const userCurrent=(req,res)=>{
    res.json({message:"ME"})
}

module.exports={
    userLogin, userRegister, userCurrent
}
