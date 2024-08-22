import mongoose from "mongoose";
import {DATABASE} from "../constants.js"

 const connectDb = async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE}`)
        // console.log(connectionInstance);
        
        console.log(`\n DB Connected !! DB HOST${connectionInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("DB Connection Error",error);
        process.exit(1)
        
    }
}


export default connectDb