const mongoose=require("mongoose");

const connectDb=async()=>{
    // console.log(process.env.Db_url)
    await mongoose.connect(process.env.Db_url)
}
module.exports=connectDb