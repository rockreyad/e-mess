const mealService = require("../services/mealService");

const createMeal = async (req, res) => {
  const { messId, shift, status } = req.body;

  if (!messId || !shift || !status) {
    res.status(400).send({
      message: "All the filed required!",
    });
    return;
  }

  try {
    
    const mealInfo = {
      mess_id: messId,
      shift: shift,
      status: status,
    };

    const createdMeal = await mealService.createMeal(mealInfo);

    res.status(201).send({
      message: "Meal has been Initialized for Today!",
      data: createdMeal,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });

    return;
  }
  res.send("Create your meal now");
};

module.exports = { createMeal };
