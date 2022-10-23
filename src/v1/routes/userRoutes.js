const express = require("express");
const { allAccess, userBoard } = require("../../controllers/userController");
const authJWT = require("../../middlewares/authVerify");
const router = express.Router();

router.get("/", allAccess, (req, res) => {
  res.send({
    message: "Welcome to User Routes",
  });
});

//Public Endpoints
router.get("/profile", [authJWT.verifyToken, authJWT.isUser], userBoard);
//Manager Protected Endpoints

//Admin Protected Endpoint

module.exports = router;
