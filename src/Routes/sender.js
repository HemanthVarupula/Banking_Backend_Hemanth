const mongoose=require("mongoose")
const express=require("express")
const Contact=require("../models/contact")
const User=require("../models/user")
const senderRouter=express.Router();
const History=require("../models/history")
senderRouter.get("/getsenderlist/:userid",async(req,res)=>{
    const userid=req.params.userid;
    const contacts=await Contact.find({ userId: new mongoose.Types.ObjectId(userid)})
    const phoneNumbers = contacts.map(c => c.phoneNumber);
     const users = await User.find({
      phoneNumber: { $in: phoneNumbers }
    });
     res.json(users);
})
senderRouter.post("/sendmoney/:senderId/:reciverId",async(req,res)=>{
  const senderId=req.params.senderId;
  const receiverId=req.params.reciverId;
  // const reciverId=req.body.reciverId;
  const amount=req.body.amount;
  const userupdateamount=await User.findByIdAndUpdate(senderId,{$inc:{balance:-amount}},{new:true})
  const updateamount=await User.findByIdAndUpdate(receiverId,{$inc:{balance:amount}},{new:true})
 const historyDoc = new History({
  senderId,
  receiverId: receiverId,
  amount
});

const history = await historyDoc.save();
  res.json({message:"amount send sucessfully",data:history,updateamount:updateamount,userupdateamount:userupdateamount})
})
module.exports=senderRouter