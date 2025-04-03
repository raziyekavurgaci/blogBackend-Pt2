import { Request, Response } from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "src/model/postModel";

export const listPosts = async (req: Request, res: Response) => {
  try {
    const { showDeleted, status, category } = req.query;
    const allPosts = await getAllPosts(
      showDeleted as string,
      status as string,
      Number(category)
    );
    res.json(allPosts);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const posts = await getPostById(Number(id));
    if (posts) {
      res.json(posts);
    } else {
      res.status(404).json({ error: "not found" });
    }
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const addPosts = async (req: Request, res: Response) => {
  try {
    const newPost = await createPost(req.body);
    res.json(newPost);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const updatedPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const editedPost = await updatePost(Number(id), req.body);
    res.json(editedPost);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};

export const deletedPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const throwPost = await deletePost(Number(id));
    res.json(throwPost);
  } catch (error) {
    console.log(error);
    res.json({ error: "Bir hata oluştu" });
  }
};
