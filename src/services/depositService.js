const Deposit = require("../database/Deposit");

const db = require("../database/models");
const Sheet = db.Sheet;

/**
 * Only can deposit current sheet of a mess
 * Can't make a future deposit
 * Amount can't be more than 20000
 * If User deposit by Own then deposit status will be pending
 */

/**
 * User
 * Need approve by manager
 * Only can deposit under his area
 * User can edit if it's not approved
 */
const createDeposit = async (depositInfo) => {
  try {
    //Fetch Sheet to validate user

    if (depositInfo.amount >= 20000) {
      throw {
        status: 401,
        message: "You can not deposit more than 2000 at a time",
      };
    }

    const getSheet = await Sheet.findOne({ _id: depositInfo.sheet })
      .select("manager members categories status")
      .populate("categories.initial");

    if (!getSheet) {
      throw {
        status: 400,
        message: "No sheet for deposit",
      };
    }

    if (getSheet?.status !== true) {
      throw {
        status: 403,
        message: "This sheet has been Closed!",
      };
    }

    if (getSheet?.manager !== depositInfo.manager) {
      depositInfo.status = false;
    }

    // const getUser = getSheet.members.find((user) => user.userInfo === depositInfo.user);

    // if (!getUser) {
    //   throw {
    //     status: 404,
    //     message: "User not found for deposit!",
    //   };
    // }

    const depositInfoToCreate = {
      ...depositInfo,
    };

    const createdDeposit = await Deposit.createDeposit(depositInfoToCreate);

    return createdDeposit;
  } catch (error) {
    throw error;
  }
};

module.exports = { createDeposit };
