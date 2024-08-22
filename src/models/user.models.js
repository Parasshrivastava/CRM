import mongoose ,{Schema} from "mongoose"

const UserSchema=new Schema({
    first_name: { type: String, required: true,trim:true,index:true },
  last_name: { type: String, required: true,trim:true,index:true },
  email: { type: String, required: true, unique: true ,lowercase:true},
  password_hash: { type: String, required: true },

},{timestamps:true})

export const User=mongoose.model("User",UserSchema)
