const bcrypt = require("bcrypt");
const authService = require("../services/authService");
const { request, response } = require("express");

/**
 *
 * @param {request} req
 * @param {response} res
 */

const createNewAccount = async (req, res) => {
  const { email, password, firstname, lastname, username } = req.body;

  //Check of the incoming data
  if (!email || !password || !firstname || !lastname || !username) {
    return res.send({
      status: "FAILED",
      data: {
        error: "Please enter all the details",
      },
    });
  }

  //Generating Hash
  const salt = await bcrypt.genSalt(12);
  const encryptedUserPassword = await bcrypt.hash(password, salt);

  const newUser = {
    username,
    email,
    password: encryptedUserPassword,
    first_name: firstname,
    last_name: lastname,
  };

  try {
    const createdNewUser = await authService.createNewAccount(newUser);

    res.status(201).send({
      status: "OK",
      message: "User has been registered Successfully",
      data: createdNewUser,
    });
    //res.cookie({ token: createdNewUser.token });
    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const signInWithCredential = async (req, res, next) => {
  const { email, username, password } = req.body;

  if (!(email || username) || !password) {
    res.send({
      status: "FAILED",
      data: {
        error: "Username,email or Password not present",
      },
    });
    return;
  }

  const existingUser = {
    username,
    email,
    password,
  };

  try {
    const userExist = await authService.getOneAccount(existingUser);

    res.cookie({ token: userExist.token });
    res.status(200).send({
      status: "OK",
      message: "LoggedIn Successfully",
      data: userExist,
    });
    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
    return;
  }
};

module.exports = { createNewAccount, signInWithCredential };
