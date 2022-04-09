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
},{ timestamps: true});
export default mongoose.model("Category",categorySchema);