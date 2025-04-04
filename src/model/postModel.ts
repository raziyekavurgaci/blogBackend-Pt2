import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPosts = async (
  showDeleted: string,
  status: string,
  category?: number
) => {
  const where: any = {};

  if (showDeleted === "true") {
    where.deleted_at = undefined;
  } else if (showDeleted === "onlyDeleted") {
    where.deleted_at = { not: null };
  } else {
    where.deleted_at = null;
  }
  if (category !== undefined) {
    where.category = category;
  }

  if (status === "published") {
    where.published_at = { not: null };
  } else if (status === "draft") {
    where.published_at = null;
  }
  return await prisma.post.findMany({ where });
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id, deleted_at: null },
  });
};

export const createPost = async (data: {
  title: string;
  content: string;
  category_id: number;
}) => {
  return await prisma.post.create({
    data,
  });
};

export const updatePost = async (
  id: number,
  data: { title?: string; content?: string; category_id?: number }
) => {
  return await prisma.post.update({
    where: { id },
    data,
  });
};

export const deletePost = async (id: number) => {
  return await prisma.post.update({
    where: { id },
    data: { deleted_at: new Date() },
  });
};
