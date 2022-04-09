import Product from '../models/product'
import slugify from 'slugify';

export const create = async (req, res) => { // create product
    req.body.slug = slugify(req.body.name);
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
    // /product?limit=4
    // /product?sortBy=name&order=asc
    const limitNumber = 20
    const limit = req.query.limit ? +req.query.limit : limitNumber;
    const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    const order = req.query.order ? req.query.order : 'desc';

    try {
        const products = await Product.find().limit(limit).exec();
        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi hiện thị"
        })
    }
  }
export const get = async (req, res) => { // get a product
    try {
        const products = await Product.findOne({_id: req.params.id }).exec();

        res.json(products);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi hiện thị"
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