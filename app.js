const express=require("express");
require("dotenv").config();
const connectDb = require("./src/config/database");
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials: true}))
const authRouter=require("./src/Routes/auth");
const transactionsRouter=require("./src/Routes/transaction")
const contactRouter=require("./src/Routes/contact")
const senderRouter=require("./src/Routes/sender")
const historyRouter=require("./src/Routes/history")
app.use("/",authRouter)
app.use("/",transactionsRouter)
app.use("/",contactRouter)
app.use("/",senderRouter)
app.use("/",historyRouter)
connectDb().then(()=>{
    console.log("db connected sucess")
    app.listen(3000,()=>{
        console.log("server started")
    })
})