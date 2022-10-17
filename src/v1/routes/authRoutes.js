/* SIGN UP, SIGN IN & SIGN OUT*/

const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

/**
 * @DESC To register the user (MANAGER, USER)
 */
router.post("/signup", authController.createNewAccount);

/**
 * @DESC To Login the user (MANAGER, USER)
 */
router.post("/signin", authController.signInWithCredential);
router.post("/signout", authController.createNewAccount);

module.exports = router;
