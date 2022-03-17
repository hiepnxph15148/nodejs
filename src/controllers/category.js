import slugify from "slugify";
import Category from "../models/category";
import Product from "../models/product"


export const create = async (req,res) =>{// create product
    req.body.slug = slugify(req.body.name);
    try{
        const category = await new Category(req.body).save();
        res.json(category);
    }catch(error){
        res.status(400).json({
            messega:"Thêm danh mục không thành công"
        })
    }
}
export const List = async(req,res) =>{// get all
    try{
        const category = await Category.find().exec;
        res.json(category);
    }catch(error){
        res.status(400).json({
        messega: "Lỗi không hiện thị được"
    })
    }
}
export const read = async(req,res) =>{// get all
    try{
    const category = await Category.findOne({slug : req.params.slug}).exec();
    const product = await Product.find({category : category}).populate('category').select('-category').exec();
    res.json ({
        category,product
    })
    }catch(error){
        res.status(400).json({
            massega: "Lỗi không hiện thị được"
        })
    }
}
export const remove = async(req,res) =>{ // detlete
    try{
        const category = await Category.findByIdAndDelete({slug : req.params.slug}).exec();
        res.json(category)
    }catch(error){
        res.status(400).json({
            messega:"Lỗi không thể xóa"
        })
    }
}