import express from "express";
import dotenv from "dotenv";
// import db from "./config/db";
import categoryRoute from "./route/categoryRoute";
import postRoute from "./route/postRoute";
import commentRoute from "./route/commentRoute";
import tagRoute from "./route/tagRoute";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/categories", categoryRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/tags",tagRoute)

app.listen(process.env.PORT || 3000, () => {
  //   db("categories").select("*"); dbyi test ettim
  console.log("Sunucu ayakta");
});
