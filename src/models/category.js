import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name :{
        type : String,
        trim: true,
    },
    slug: {
        type : String,
        lowercasse : true,
        unique:true,
        index: true,
    },
    // price :{
        // type : Number,
        // require : true,
    // },
    // category :{
        // type : ObjectId,
        // ref :"Category"
    // }
},{ timestamps: true});
export default mongoose.model("category",categorySchema);