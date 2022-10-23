const db = require("./models");
const Mess = db.Mess;
const Role = db.Role;
const User = db.User;

//Create a new Mess and Update User Role as manager who creates the mess
const createNewMess = async (newMess) => {
  try {
    //make the use manager
    const userExist = await User.findOne()
      .or([{ _id: newMess._creator }])
      .populate("role");

    // user exists
    if (!userExist) {
      throw {
        status: 400,
        message: "Could not found User!",
      };
    }
    if (!(userExist.role.name === "user")) {
      throw {
        status: 401,
        message: "unable to create mess!",
      };
    }

    const mess = new Mess(newMess);
    await mess.save();
    const roles = await Role.findOne({ name: "manager" });
    const role = { role: roles };

    //FIXME: Update Role and _join_mess together

    //NOTE: update user _joined_mess true
    let join = { _join_mess: true, role: roles };
    await userExist.updateOne(join);
    return newMess;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const joinMess = async (messToJoin) => {
  const { user_id, mess_id } = messToJoin;

  try {
    //find user
    const userExist = await User.findById(user_id);

    if (!userExist) {
      throw {
        status: 400,
        message: "User doesn't exist!",
      };
    }

    if (userExist?._join_mess === true) {
      throw {
        status: 406,
        message: "You already have a mess!",
      };
    }

    //Get Mess
    const messExist = await Mess.findOne()
      .or([{ mess_id }])
      .select("mess_id name capacity seat status _members");

    if (!messExist) {
      throw {
        status: 404,
        message: "No mess found!",
      };
    }

    if (messExist?.seat === false) {
      throw {
        status: 403,
        message: "There is no seat!",
      };
    }

    //Check the capacity of mess compare to default capacity =15
    let countCapacity = messExist._members.length;

    if (countCapacity === messExist?.capacity) {
      throw {
        status: 400,
        message: "This mess is full",
      };
    }

    if (messExist?.status === false) {
      throw {
        status: 403,
        message: "Mess is disable!",
      };
    }

    //Append user to _member array
    await messExist._members.push({ user: user_id });
    await messExist.save();

    //update this user joined in a mess
    let join = { _join_mess: true };
    await userExist.updateOne(join);

    //Send user_id and mess_id in return to MessService
    return messToJoin;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const leaveMess = async (messToLeave) => {
  const { user_id, mess_id } = messToLeave;

  try {
    //Find user
    const userExist = await User.findById(user_id);

    if (userExist?.id !== user_id) {
      throw {
        status: 400,
        message: "User doesn't exist!",
      };
    }

    if (userExist?._join_mess === false) {
      throw {
        status: 406,
        message: "you are not joined a mess!",
      };
    }

    //Get Mess
    const messExist = await Mess.findOne()
      .or([{ mess_id }])
      .select("mess_id name status _members");

    if (messExist?.mess_id !== mess_id) {
      throw {
        status: 404,
        message: "No mess found!",
      };
    }

    /**TODO:
     * delete userID from _members
     * update user _join_mess true to false
     *
     */

    const eliminateMember = messExist._members.filter((item) => {
      return item.user != user_id;
    });

    let memberList = { _members: eliminateMember };
    await messExist.updateOne(memberList);
    //update this user not join in a mess
    let join = { _join_mess: false };
    await userExist.updateOne(join);
    return messToLeave;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error,
    };
  }
};
module.exports = { createNewMess, joinMess, leaveMess };
