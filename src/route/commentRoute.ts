import { Router } from "express";
import {
  listComments,
  getComment,
  addComment,
  updatedComment,
  deletedComment,
} from "src/controller/commentController";

const router = Router();

router.get("/api/comments", listComments);
router.get("/api/comments/:id", getComment);
router.post("/api/comments", addComment);
router.put("/api/comments/:id", updatedComment);
router.delete("/api/comments/:id", deletedComment);
export default router;
