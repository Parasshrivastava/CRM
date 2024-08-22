import mongoose ,{Schema}from "mongoose"

const CandidateSchema=new Schema({
    first_name: { type: String, required: true ,trim:true, index :true},
    last_name: { type: String, required: true ,trim:true, index :true},
    email: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
},{timestamps:true})

export const Candidate=mongoose.model("Candidate",CandidateSchema)