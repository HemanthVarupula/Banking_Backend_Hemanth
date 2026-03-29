const express=require("express");

const authRouter=express.Router();
const User=require("../models/user");
authRouter.post("/signup",async (req,res)=>{
    const userObject={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        balance:req.body.balance||0
    }
    const user=new User(userObject);
    const savedUser=await user.save();
    res.status(200).json({messgae:"user added sucessfully",data:savedUser})
})
authRouter.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email,password})
     if (!user) {
     return  res.status(401).json({message:"invalid credentials"});
    }
    res.status(200).json({message:"login sucessful",user})
})
module.exports =authRouter