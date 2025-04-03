import { Router } from "express";
import {
  addCategory,
  deletedCategory,
  getCategory,
  listCategories,
  updatedCategory,
} from "src/controller/categoryController";

const router = Router();

router.get("/", listCategories);
router.get("/:id", getCategory);
router.post("/", addCategory);
router.put("/:id", updatedCategory);
router.delete("/:id", deletedCategory);

export default router;
