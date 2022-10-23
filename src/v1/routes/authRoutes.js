/* SIGN UP, SIGN IN & SIGN OUT*/

const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

/**
 * @openapi
 * /api/v1/auth/signup:
 *  post:
 *    tags:
 *      - Authentication
 *    summary: Create a new user account
 *    description: Create a new user account
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstname:
 *                type : string
 *                example : maruf
 *              lastname:
 *                type : string
 *                example : ahmed
 *              email:
 *                type : string
 *                example : maruf@gmail.com
 *              username:
 *                type : string
 *                example : maruf123
 *              password:
 *                type : string
 *                example : 123456
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type : string
 *                  example: "OK"
 *                data:
 *                  type : object
 * 
 */
router.post("/signup", authController.createNewAccount);

/**
 * @openapi
 * /api/v1/auth/signin:
 *  post:
 *    tags:
 *      - Authentication
 *    summary: Existing user validation
 *    description: Existing user validation
 *    requestBody:
 *      required : true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                example : example
 *              password:
 *                type: string
 *                example: 123456
 *    responses:
 *      202:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type : string
 *                  example: "OK"
 *                data:
 *                  type : object
 */
router.post("/signin", authController.signInWithCredential);
router.post("/signout", authController.createNewAccount);

module.exports = router;
