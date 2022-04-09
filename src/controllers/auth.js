import User from "../models/user";
import jwt from 'jsonwebtoken'

export const signup = async (req,res)=>{
    try{
    const {name,email,password} = req.body;
    const existUser = await User.findOne({email}).exec();
    if(existUser){
        res.json({
            message:"Email đã tồn tại vui lòng đăng kí email khác"
        })
    }
    const user = await new User({name,email,password}).save();
    res.json({
        user:{
            id: user._id,
            name:user.name,
            email: user.email,
        }
    });
    }catch (error){
    res.json(400).json({
        message:"Không tạo được tài khoản"
    })
}
}
export const signin = async (req,res) =>{ 
    const {email,password} = req.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        res.status(401).json({
            message:"Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({email},'12234',{ expiresIn: 60 * 60 });
    res.json({
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })
}