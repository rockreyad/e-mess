const express = require("express");
const {createMeal} = require('../../controllers/mealController')

const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to Meal");
});

router.post("/create", createMeal);

module.exports = router;
