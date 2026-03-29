const express=require("express");
const historyRouter=express.Router();
const History=require("../models/history")
historyRouter.get("/gethistory/:senderId",async(req,res)=>{
    const senderId=req.params.senderId;
     const history = await History.find({ senderId });
     res.status(200).json({senderhistory:history})
})

module.exports=historyRouter