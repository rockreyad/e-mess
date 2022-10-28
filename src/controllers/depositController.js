const depositService = require("../services/depositService");

const createDeposit = async (req, res) => {
  const { date, user, sheet, category, amount, desc, manager } = req.body;
  try {
    if (!date || !user || !sheet || !category || !amount || !desc) {
      res.status(400).send({
        error: "All fields required!",
      });

      return;
    }
    const depositInfo = {
      date,
      user,
      sheet,
      category,
      amount,
      desc,
      manager,
    };
    const createdDeposit = await depositService.createDeposit(depositInfo);

    res.status(201).send({
      message: "Deposit has been created!",
      data: createdDeposit,
    });

    return;
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createDeposit };
