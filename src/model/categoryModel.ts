import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCategories = async (showDeleted: string) => {
  return await prisma.category.findMany({
    where:
      showDeleted === "true"
        ? {}
        : showDeleted === "onlyDeleted"
        ? { deleted_at: { not: null } }
        : { deleted_at: null },
  });
};

export const getCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id: id.toString(), deleted_at: null },
  });
};

export const createCategory = async (name: string) => {
  return await prisma.category.create({
    data: {
      name,
    },
  });
};

export const updateCategory = async (id: number, name: string) => {
  return await prisma.category.update({
    where: { id: id.toString() },
    data: { name },
  });
};

export const deleteCategory = async (id: number) => {
  return await prisma.category.update({
    where: { id: id.toString() },
    data: { deleted_at: new Date() },
  });
};
