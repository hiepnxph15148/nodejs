import mongoose, {Schema, ObjectId} from "mongoose";
const cartSchame = new  Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    user:{
        type: ObjectId,
        ref:"User"
    },
    quantiny: {
        type: Number,
        required: true
    },
}, {timestamps: true})
export default mongoose.model("Cart", cartSchame)