const mongoose=require("mongoose");

const {Schema}=mongoose;

const contactSchema=mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        phoneNumber:{
             type: String,
             required: true,
             match: [/^\d{10}$/, 'Phone number must be 10 digits']
        },
        name:{
            type:String,
            minLength:4
        }
    }
)

module.exports=mongoose.model("Contacts",contactSchema)