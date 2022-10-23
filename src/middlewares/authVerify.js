const jwt = require("jsonwebtoken");
const jwtSecret = require("../database/utils/configs/authConfig");
const { request, response } = require("express");
const db = require("../database/models");
/**
 *
 * @param {request} req
 * @param {response} res
 */

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["e-mess-access-token"];

  if (!token) {
    res.status(403).send("No token provided!");
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send("Invalid Token!");
  }
};

const isUser = async (req, res, next) => {
  try {
    const user = await db.User.findById({ _id: req.user.userId }).populate(
      "role"
    );
    if (!user.role.name) {
      return res.status(401).send("Unauthorized");
    }
    if (req.user.role != user.role.name) {
      return res.status(403).send("Not authorized");
    }
    next();
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
};
const isManager = async (req, res, next) => {
  try {
    const user = await db.User.findById({ _id: req.user.userId }).populate(
      "role"
    );
    if (!user.role.name) {
      return res.status(401).send("Unauthorized");
    }
    if (req.user.role != user.role.name) {
      return res.status(403).send("Not authorized");
    }
    next();
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
};

const authJWT = { verifyToken, isUser, isManager };
module.exports = authJWT;
