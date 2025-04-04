import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllComments = async () => {
  return await prisma.comment.findMany();
};

export const getCommentById = async (id: number) => {
  return await prisma.comment.findUnique({
    where: { id },
  });
};

export const createComment = async (data: {
  content: string;
  post_id: number;
  commenter_name: string;
}) => {
  return await prisma.comment.create({
    data: {
      content: data.content,
      post_id: data.post_id,
      commenter_name: data.commenter_name,
    },
  });
};

export const updateComment = async (id: number, data: { content?: string }) => {
  return await prisma.comment.update({
    where: { id },
    data,
  });
};

export const deleteComment = async (id: number) => {
  return await prisma.comment.delete({
    where: { id },
  });
};
