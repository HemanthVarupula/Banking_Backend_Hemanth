const mongoose=require("mongoose");
// const User=require("../models/user")
const {Schema}=mongoose;

const HistorySchema=new Schema(
    {
        senderId:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true
        },
        receiverId:{
            type:mongoose.Schema.ObjectId,
            ref:"User"
        },
         amount: {
            type: Number,
            required: true
        },
         createdAt: {
          type: Date,
           default: Date.now
        },
    }
)

module.exports=mongoose.model("History",HistorySchema)