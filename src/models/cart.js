import mongoose, {Schema, ObjectId} from "mongoose";
const cartSchame = new  Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    user:{
        type: ObjectId,
        ref:"User"
    },
    quantiny: {
        type: Number,
        required: true
    },
    order:{
        type: ObjectId,
        ref:"Order"
    }
}, {timestamps: true})
export default mongoose.model("Cart", cartSchame)