import { Router } from "express";
import {
  listTags,
  getTag,
  addTag,
  updatedTag,
  deletedTag,
} from "src/controller/tagController";

const router = Router();
router.get("/api/tags", listTags);
router.get("/api/tags/:id", getTag);
router.post("/api/tags", addTag);
router.put("/api/tags/:id", updatedTag);
router.delete("/api/tags/:id", deletedTag);

export default router;
