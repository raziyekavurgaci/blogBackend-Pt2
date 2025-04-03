import db from "src/config/db";

export const getAllPosts = (
  showDeleted: string,
  status: string,
  category: number
) => {
  const query = db("posts");
  if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNot("deleted_at", null);
  } else {
    query.where("deleted_at", null);
  }

  if (category) {
    query.where("category_id", category);
  }

  if (status === "published") {
    query.whereNot("published_at", null);
  } else if (status === "draft") {
    query.where("published_at", null);
  }

  return query;
};

export const getPostById = (id: number) => {
  return db("posts").where({ id, deleted_at: null }).first();
};

export const createPost = (data: object) => {
  return db("posts").insert(data).returning("*");
};

export const updatePost = (id: number, data: object) => {
  return db("posts").where({ id }).update(data);
};

export const deletePost = (id: number) => {
  return db("posts").where({ id }).update({ deleted_at: new Date() });
};
