const express=require("express");
const transactionsRouter=express.Router();
const User=require("../models/user")
const History=require("../models/history")
transactionsRouter.post("/deposit/:id",async(req,res)=>{
    const id=req.params.id
    const {updatebalance}=req.body;
    const user=await User.findByIdAndUpdate(id,{$inc:{balance:updatebalance}},{new:true})
     const historyDoc = new History({
        senderId:id,
        amount:updatebalance,
    });
    const history = await historyDoc.save();
    res.json({message:" amount sucessfully deposited",data:user})
})
transactionsRouter.post("/withdraw/:id",async(req,res)=>{
    const id=req.params.id;
    const {withdrawamout}=req.body;
    const user=await User.findByIdAndUpdate(id,{$inc:{balance:-withdrawamout}},{new:true})
     const historyDoc = new History({
         senderId:id,
        amount:withdrawamout,
    });
    const history = await historyDoc.save();
    res.json({message:"withdrawn amount sucessfully",data:user})
})
module.exports=transactionsRouter