const Meal = require("../database/Meal");
const db = require("../database/models");
const Sheet = db.Sheet;
const moment = require("moment");

const createMeal = async (mealInfo) => {
  //TODO: fetch sheet
  /**
   * fetch Sheet and get sheet info
   * members and their mealStatus
   * if mealStatus is false then count meal 0
   * if count meal 0 then meal doesn't provide
   */
  try {
    const getSheet = await Sheet.findOne({ mess: mealInfo.mess_id }).select(
      "month members status"
    );

    if (!getSheet) {
      throw {
        status: 404,
        message: "There are no sheet!",
      };
    }

    if (getSheet?.status === false) {
      throw {
        status: 403,
        message: "This sheet has been Closed",
      };
    }

    //Filter sheet members id and mealStatus
    /**
     * if mealStatus if off by user then count their meal as 0
     */

    const userAndMeal = getSheet.members.map((item) => ({
      user: item.userInfo,

      meal: 0,
      requestMeal: 0,
      provide: false,
    }));

    const mealInfoToCreate = {
      ...mealInfo,
      sheet: getSheet.id,
      date: moment().format("MMM Do YY"),
      info: userAndMeal,
    };

    const createdMeal = await Meal.createMeal(mealInfoToCreate);
    return createdMeal;
  } catch (error) {
    throw error;
  }
};

module.exports = { createMeal };
