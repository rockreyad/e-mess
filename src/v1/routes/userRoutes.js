const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Welcome to User Routes",
  });
});

//Public Endpoints
router.get("/profile");

//Manager Protected Endpoints


//Admin Protected Endpoint

module.exports = router;
