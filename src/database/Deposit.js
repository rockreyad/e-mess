const db = require("./models");
const Deposit = db.Deposit;

const createDeposit = async (depositInfoToCreate) => {
  try {
    const deposit = new Deposit(depositInfoToCreate);
    await deposit.save();
    const depositIntoToCreated = {
      depositInfoToCreate,
    };

    return depositIntoToCreated;
  } catch (error) {
    throw error;
  }
};
module.exports = { createDeposit };
