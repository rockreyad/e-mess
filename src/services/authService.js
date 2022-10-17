const Auth = require("../database/Auth");

const createNewAccount = async (newUser) => {
  const userToInsert = {
    ...newUser,
    role: "user",
  };

  try {
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
