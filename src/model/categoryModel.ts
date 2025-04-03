import db from "src/config/db";

export const getAllCategories = (showDeleted: string) => {
  const query = db("categories");
  if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNot("deleted_at", null);
  } else {
    query.where("deleted_at", null);
  }
  return query;
};

export const getCategoryById = (id: number) => {
  return db("categories").where({ id, deleted_at: null }).first();
};

export const createCategory = (data: object) => {
  return db("categories").insert(data).returning("*");
  //   knexe özel yapılan değişikliği döndürür returning ile
};

export const updateCategory = (id: number, data: object) => {
  return db("categories").where({ id }).update(data);
};

export const deleteCategory = (id: number) => {
  return db("categories").where({ id }).update({ deleted_at: new Date() });
  // soft delete yapılacağı için apdate ile tarihi güncelledi
  // eğer geri getircek olsak deleted_at false yada null olarak güncellenirdi
};
