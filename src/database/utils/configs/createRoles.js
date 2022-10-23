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
module.exports = createRoles;
