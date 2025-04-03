import { Router } from "express";
import {
  listPosts,
  getPosts,
  addPosts,
  updatedPost,
  deletedPost,
} from "src/controller/postController";

const router = Router();
router.get("/", listPosts);
router.get("/:id", getPosts);
router.post("/", addPosts);
router.put("/:id", updatedPost);
router.delete("/:id", deletedPost);

export default router;
