// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./DB/index.js";
dotenv.config({
    path:'./env'
})

connectDb();