import { Request, Response } from "express";
import {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} from "src/model/tagModel";

export const listTags = async (req: Request, res: Response) => {
  try {
    const tags = await getAllTags();
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
};

export const getTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tag = await getTagById(Number(id));

    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ error: "Etiket bulunamadı" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
};

export const addTag = async (req: Request, res: Response) => {
  try {
    const newTag = await createTag(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
};

export const updatedTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const editedTag = await updateTag(Number(id), req.body);
    res.json(editedTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
};

export const deletedTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const removedTag = await deleteTag(Number(id));
    res.json(removedTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu" });
  }
};
