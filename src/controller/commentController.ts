import { Request, Response } from "express";

import {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from "src/model/commentModel";

export const listComments = async (req: Request, res: Response) => {
  try {
    const comments = await getAllComments();
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const getComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comment = await getCommentById(Number(id));
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const addComment = async (req: Request, res: Response) => {
  try {
    const newComment = await createComment(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const updatedComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const editedComment = await updateComment(Number(id), req.body);
    res.json(editedComment);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const deletedComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const throwComment = await deleteComment(Number(id));
    res.json(throwComment);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};
