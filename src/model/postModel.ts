import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPosts = async (
  showDeleted: string,
  status: string,
  category?: number
) => {
  return await prisma.post.findMany({
    where: {
      deleted_at:
        showDeleted === "true"
          ? undefined
          : showDeleted === "onlyDeleted"
          ? { not: null }
          : null,
      category_id: category ? category.toString() : undefined,
      published_at:
        status === "published"
          ? { not: null }
          : status === "draft"
          ? null
          : undefined,
    },
  });
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: { id: id.toString(), deleted_at: null },
  });
};

export const createPost = async (data: {
  title: string;
  content: string;
  category_id: number;
}) => {
  return await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      category_id: data.category_id.toString(),
    },
  });
};

export const updatePost = async (
  id: number,
  data: { title?: string; content?: string; category_id?: number }
) => {
  return await prisma.post.update({
    where: { id: id.toString() },
    data: {
      ...data,
      category_id: data.category_id?.toString(),
    },
  });
};

export const deletePost = async (id: number) => {
  return await prisma.post.update({
    where: { id: id.toString() },
    data: { deleted_at: new Date() },
  });
};
