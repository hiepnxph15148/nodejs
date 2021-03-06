// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import categoryRouter from './routes/category'
import mongoose from 'mongoose';
const app = express();
// middleware
app.use(express.json());

// Routing
app.use("/api", productRouter,categoryRouter);

// connect database
mongoose.connect("mongodb://127.0.0.1:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
// Connect
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
