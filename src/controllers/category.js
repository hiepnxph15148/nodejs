import Category from '../models/category'
import slugify from 'slugify';
import Product from '../models/product';


export const create = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save()
        res.json(category);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm danh mục không thành công"
        })
    }
}

export const list = async (req, res) => { // get all
    try {
        const categories = await Category.find().exec();
        res.json(categories);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
}
export const read = async (req, res) => { // get all
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec();
        const products = await Product.find({category: category}).populate('category').select('-category').exec()
        console.log('products', products);
        res.json({
            category, products
        });    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi"
        })
    }
  }
  export const remove = async (req, res) => { // delete product
    try {
        const categories = await Category.findOneAndDelete({_id: req.params.id }).exec();
        res.json(categories);    
    } catch (error) {
        res.status(400).json({
            message: "Xóa không thành công"
        })
    }
}
export const update = async (req, res) => { // update product
    const condition = {_id: req.params.id };
    const update = req.body;
    const optional = { new : true}
    try {
        const categories = await Category.findOneAndUpdate(condition,update,optional).exec();
        res.json(categories);    
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật không thành công"
        })
    }
}