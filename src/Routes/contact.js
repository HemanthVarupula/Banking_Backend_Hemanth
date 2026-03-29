const express=require("express")
const contactRouter=express.Router();
const Contacts=require("../models/contact")
contactRouter.post("/addcontact/:id",async (req,res)=>{
    const userId=req.params.id
    const {phoneNumber,name}=req.body;
    const contact=new Contacts({userId,phoneNumber,name});
    const savedContact=await contact.save();
    res.json({message:{data:savedContact}})
})

contactRouter.get("/getcontacts/:id",async (req,res)=>{
    const userId = req.params.id;
    const users=await Contacts.find({userId:userId})
    res.json({message:{status:"all contacts of user ",data:users}})
})

module.exports=contactRouter;