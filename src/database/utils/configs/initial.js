const { success, error } = require("consola");
const db = require("../../models");
const createRoles = async (app) => {
  try {
    const ROLES = await db.Role.count();
    if (!ROLES) {
      await db.Role.create([
        { name: "user" },
        { name: "manager" },
        { name: "admin" },
      ]);
      success({
        message: "Roles has been created",
        badge: true,
      });
    }
  } catch (error) {
    throw error;
  }
};

//REF its not using
const createCategories = async (app) => {
  try {
    const CATEGORIES = await db.Category.count();
    if (!CATEGORIES) {
      await db.Category.create([{ name: "utility" }, { name: "meal" }]);

      success({
        message: "Categories has been Created!",
        badge: true,
      });
    }
  } catch (error) {
    throw error;
  }
};
module.exports = { createRoles, createCategories };
