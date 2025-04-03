import db from "src/config/db";

export const getAllComments = () => {
  return db("comments");
};

export const getCommentById = (id: number) => {
  return db("comments").where({ id }).first();
};

export const createComment = (data: object) => {
  return db("comments").insert(data).returning("*");
};

export const updateComment = (id: number, data: object) => {
  return db("comments").where({ id }).update(data).returning("*");
};

export const deleteComment = (id: number) => {
  return db("comments").where({ id }).delete();
};
