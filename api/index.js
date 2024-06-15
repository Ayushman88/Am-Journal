import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.error("MongoDb connection error:", err);
  });

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port ", port);
});

app.use("/api/user", userRoutes);
