const bcrypt = require("bcrypt");
const authService = require("../services/authService");

const createNewAccount = async (req, res) => {
  const { email, password, firstname, lastname, username } = req.body;

  if (!email || !password || !firstname || !lastname || !username) {
    res.send({
      status: "FAILED",
      data: {
        error: "One of the key is missing or empty!",
      },
    });
    return;
  }

  //Generating Hash
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  const newUser = {
    username,
    email,
    password: hash,
    first_name: firstname,
    last_name: lastname,
  };

  try {
    const createdNewUser = await authService.createNewAccount(newUser);
    res.status(201).send({
      status: "OK",
      data: createdNewUser,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const signInWithCredential = async (req, res) => {
  const { email, username, password } = req.body;

  if (!(email || username) || !password) {
    res.send({
      status: "FAILED",
      data: {
        error: "One of the key is missing or empty!",
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
    const getExistingUser = await authService.getOneAccount(existingUser);

    req.session.token = getExistingUser.token;
    res.status(202).send({
      status: "Success",
      message: "Login Successfully !",
      data: getExistingUser,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = { createNewAccount, signInWithCredential };
