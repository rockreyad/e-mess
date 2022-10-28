const express = require("express");
const router = express.Router();
const { createSheet,updateSheet } = require("../../controllers/sheetController");
router.get("/", (req, res) => {
  res.send({
    status: "OK",
    message: "Get all Sheet",
  });
});

router.post("/create", createSheet);
router.patch('/update',updateSheet);
module.exports = router;
