import { Router } from "express";
import {
  listPosts,
  getPosts,
  addPosts,
  updatedPost,
  deletedPost,
} from "src/controller/postController";

const router = Router();
router.get("/api/posts", listPosts);
router.get("/api/posts/:id", getPosts);
router.post("/api/posts", addPosts);
router.put("/api/posts/:id", updatedPost);
router.delete("/api/posts/:id", deletedPost);

export default router;
