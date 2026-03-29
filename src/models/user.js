const mongoose=require("mongoose");

const {Schema}=mongoose;

const userSchema=new Schema(
    {
        firstName:{
            type:String,
            minLength:5
        },
        lastName:{
            type:String
        },
        email:{
            type:String,
            lowercase:true,
            required:true,
            unique:true

        },
        password:{
            type:String,
            required:true,
            maxLength:12
        },
        phoneNumber:{
            type:Number,
            minLength:10,
            maxLength:11
        },
        balance:{
            type:Number
        }
    },
    {
        timestamps:true
    }
)

module.exports= mongoose.model("User", userSchema);

