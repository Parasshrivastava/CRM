// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./DB/index.js";
import {app} from "./app.js"
dotenv.config({
    path:'./env'
})

connectDb()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERR",error);
        throw error;
        
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`SERVER Running at port ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MONGO DB Connection Failed");

});