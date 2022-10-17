const db = require("./models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./utils/configs/authConfig");
const User = db.User;

const createNewAccount = async (newUser) => {
  //username and email destructing form client request
  const { username, email } = newUser;

  //Checking username

  const duplicateUser = await User.findOne()
    .or([{ username }, { email }])
    .select("username email");

  // debugger
  if (duplicateUser?.username === username) {
    throw {
      status: 400,
      message: `Username ${newUser.username} is already in use`,
    };
  }
  if (duplicateUser?.email === email) {
    throw {
      status: 400,
      message: `Email ${newUser.email} is already in use`,
    };
  }

  try {
    const user = new User(newUser);
    await user.save();
    return newUser;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getOneAccount = async (existingUser) => {
  const { username, email, password } = existingUser;

  let user;
  try {
    user = await User.findOne().or([{ username }, { email }]);

    if (user) {
      const passwordIsValid = await bcrypt.compare(password, user.password);

      if (passwordIsValid) {
        //save the Last Login Date & Time
        const login_time = new Date(Date.now());
        const signed_at = { "time_stamp.signed_at": login_time };
        await user.updateOne(signed_at);

        var accessToken = jwt.sign(
          { id: user.id, role: user.role },
          config.secret,
          {
            expiresIn: "30s",
          }
        );

        const sendUserInfo = {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          token: accessToken,
        };
        return sendUserInfo;
      }
    }
  } catch (error) {
    throw {
      status: 404,
      message: "Could not found User!",
    };
  }
};

module.exports = { createNewAccount, getOneAccount };
