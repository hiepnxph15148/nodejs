// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import categoryRouter from './routes/category'
import userRouter from './routes/auth'
import CartProduct from './routes/cart'
import mongoose from 'mongoose';
import corc from 'cors'
const app = express();
// middleware
app.use(express.json());
app.use(corc())

// Routing
app.use("/api", productRouter);
app.use('/api',categoryRouter)
app.use("/api",userRouter)
app.use("/api",CartProduct)

// connect database
mongoose.connect("mongodb://127.0.0.1:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
// Connect
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
