const express = require("express");
const {
  createMess,
  joinMess,
  leaveMess,
} = require("../../controllers/messController");
const authJWT = require("../../middlewares/authVerify");
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

// router.get("/", isUser, createMess);
router.post("/create", [authJWT.verifyToken, authJWT.isUser], createMess);
router.post("/update", [authJWT.verifyToken, authJWT.isUser]);
router.patch("/join", [authJWT.verifyToken, authJWT.isUser], joinMess);
router.delete("/leave", [authJWT.verifyToken, authJWT.isUser], leaveMess);

module.exports = router;
