import mongoose,{ObjectId} from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug :{
        type: String,
        minLength: 5,
        require: true,
    },
    price: {
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    category : {
        type:  mongoose.ObjectId,
        ref :"category"
    }
}, { timestamps: true} )

export default mongoose.model('Product', productSchema);