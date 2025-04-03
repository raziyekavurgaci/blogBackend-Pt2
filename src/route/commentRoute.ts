import { Router } from "express";
import {
  listComments,
  getComment,
  addComment,
  updatedComment,
  deletedComment,
} from "src/controller/commentController";

const router = Router();

router.get("/", listComments);
router.get("/:id", getComment);
router.post("/", addComment);
router.put("/:id", updatedComment);
router.delete("/:id", deletedComment);

export default router;
