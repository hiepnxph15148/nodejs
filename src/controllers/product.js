import slugify from 'slugify';
import Product from '../models/product'


export const create = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new Product(req.body).save()
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}

export const list = async (req, res) => { // get all
    try {
        const products = await Product.find().exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
  }
export const get = async (req, res) => { // get a product
    try {
        const products = await Product.findOne({_id: req.params.id }).exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Không thành công"
        })
    }
}

export const remove = async (req, res) => { // delete product
    try {
        const products = await Product.findOneAndDelete({_id: req.params.id }).exec();
        res.json(products);    
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
        const products = await Product.findOneAndUpdate(condition,update,optional).exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật không thành công"
        })
    }
}