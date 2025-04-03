import { Request, Response } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "src/model/categoryModel";

export const listCategories = async (req: Request, res: Response) => {
  try {
    const { showDeleted } = req.query;
    // const queryParams = req.query;
    // const showDeleted = queryParams.showDeleted yukarıdaki gibi yazılmasaydı manuel olarak yazmış olurdum
    const categories = await getAllCategories(showDeleted as string);
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await getCategoryById(Number(id));
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = await createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const updatedCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const editedCategory = await updateCategory(Number(id), req.body);
    res.json(editedCategory);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const deletedCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const throwCategory = await deleteCategory(Number(id));
    res.json(throwCategory);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};
