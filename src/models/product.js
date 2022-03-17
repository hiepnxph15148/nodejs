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
    category : {
        type:  Object,
        ref :"category"
    }
}, { timestamps: true} )

export default mongoose.model('Product', productSchema);