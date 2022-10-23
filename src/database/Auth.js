const db = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("./utils/configs/authConfig");
const User = db.User;

const createNewAccount = async (newUser) => {
  //username and email destructing form client request
  const { username, email } = newUser;

  const userExist = await User.findOne()
    .or([{ username }, { email }])
    .select("username email");

  //Check if the user already exist or not
  if (userExist?.username === username) {
    throw {
      status: 400,
      message: `Username ${newUser.username} is already in use`,
    };
  }
  if (userExist?.email === email) {
    throw {
      status: 400,
      message: `Email ${newUser.email} is already in use`,
    };
  }

  try {
    const user = new User(newUser);

    var token = jwt.sign(
      { userId: user._id, role: user.role.name },
      jwtSecret,
      {
        expiresIn: "10h",
      }
    );

    // save user token
    user.token = token;
    // Create user in our database
    await user.save();

    const sendUserInfo = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role.name,
      token: token,
    };

    return sendUserInfo;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneAccount = async (existingUser) => {
  const { username, email, password } = existingUser;

  try {
    //Get The User Information
    const userExist = await User.findOne()
      .or([{ username }, { email }])
      .populate("role");

    // user exists

    if (!userExist) {
      throw {
        status: 400,
        message: "Could not found User!",
      };
    }
    //Check Password matched
    const isPasswordMatched = await bcrypt.compare(
      password,
      userExist.password
    );

    if (!isPasswordMatched) {
      throw {
        status: 401,
        message: "Password does not matched!",
      };
    }

    //save the Last Login Date & Time
    const login_time = new Date(Date.now());
    const signed_at = { "time_stamp.signed_at": login_time };
    await userExist.updateOne(signed_at);

    var token = jwt.sign(
      { userId: userExist._id, role: userExist.role.name },
      jwtSecret,
      {
        expiresIn: "10h",
      }
    );

    // save user token
    userExist.token = token;
    const sendUserInfo = {
      id: userExist._id,
      username: userExist.username,
      email: userExist.email,
      role: userExist.role.name,
      token: token,
    };
    return sendUserInfo;
  } catch (error) {
    throw {
      status: 404,
      message: error,
    };
  }
};

module.exports = { createNewAccount, getOneAccount };
