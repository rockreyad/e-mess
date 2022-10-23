const Auth = require("../database/Auth");
const Role = require("../database/models/roleModel");

const createNewAccount = async (newUser) => {

  
  try {
    const roles = await Role.findOne({name : "user"});
    const userToInsert = {
      ...newUser,
      role: roles.id,
    };
    const createdNewAccount = await Auth.createNewAccount(userToInsert);
    return createdNewAccount;
  } catch (error) {
    throw error;
  }
};

const getOneAccount = async (existingUser) => {
  const userToFind = {
    ...existingUser,
  };

  try {
    const findOneAccount = await Auth.getOneAccount(userToFind);
    return findOneAccount;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewAccount, getOneAccount };
