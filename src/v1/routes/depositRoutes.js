const express = require("express");
const router = express.Router();
const { createDeposit } = require("../../controllers/depositController");

router.get("/", (req, res) => {
  res.send("welcome to deposit");
});

router.post("/create", createDeposit);

module.exports = router;
