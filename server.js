import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'


// Load environment variables
config();

const app = express();

// Middleware
app.use(express.json());

// user router
app.use('/api/user',userRouter)

// product router
app.use('/api/product',productRouter)

// cart router
app.use('/api/cart',cartRouter)

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "home route",
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "NodeJs_E_COMM_API",
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

// Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on", port);
});