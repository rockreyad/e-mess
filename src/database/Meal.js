const db = require("./models");
const moment = require("moment");

const Meal = db.Meal;

const createMeal = async (mealInfoToCreate) => {
  try {
    //fetch Meal to Validate the day meal

    //Date now matching for time
    const getMeal = await Meal.findOne({
      sheet: mealInfoToCreate.sheet,
      date: mealInfoToCreate.date,
    });

    if (getMeal) {
      const today = moment();
      const mealDate = moment(getMeal.date).format("MMM Do YY");
      let difference = today.diff(mealDate, "days");

      if (!difference) {
        throw {
          status: 400,
          message: "Bad Request",
        };
      }
    }

    const meal = new Meal(mealInfoToCreate);
    await meal.save();
  } catch (error) {
    throw error;
  }

  return mealInfoToCreate;
};

module.exports = { createMeal };
