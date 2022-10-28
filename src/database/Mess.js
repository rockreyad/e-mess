const db = require("./models");
const Mess = db.Mess;
const Role = db.Role;
const User = db.User;

//COMPLETE Create a mess Only by a user Whoever exists in a mess
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

    //NOTE: update user _joined_mess true
    let join = { _join_mess: true, role: roles };
    await userExist.updateOne(join);
    return newMess;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

//COMPLETE Join a mess Only User Can Join
//FIXME manager can't join a mess
//TODO after a successfully join send him to requested Member List to verify by manager
/** //REVIEW
 * Valid user only can join
 * he can't join , if already in a mess
 * Only can join if the mess exists
 * If mess have no seat , he can't join
 * if members of a mess already capacity of 15 users, he can't join
 * if Mess is disable he can't join
 * Add user id in the Mess Member List
 * Who ever join in a mess update his _join_mess from user data
 */
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

//COMPLETE Leave a mess for manager and user

//TODO randomly pick one user from member of mess and make him manager only manager certain leaves
/** //REVIEW:
 * Valid user only can leave
 * User only can leave when there are in a mess
 * They can leave only the mess exists
 * if a manager leave then update his role
 * who ever leave from a mess update his _join_mess from user data
 */
const leaveMess = async (messToLeave) => {
  const { user_id, mess_id } = messToLeave;

  try {
    //Find user
    const userExist = await User.findById(user_id).populate("role");

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

    //Check User Role To Leave .. If Manager Leave Then Make his role to User
    const manager = await Role.findOne({ name: "manager" });
    if (userExist.role.id === manager.id) {
      //Manager Leave
      const user = await Role.findOne({ name: "user" });
      let updateSomeInfo = { _join_mess: false, role: user };
      await userExist.updateOne(updateSomeInfo);
    } else {
      //User leave
      let updateSomeInfo = { _join_mess: false };
      await userExist.updateOne(updateSomeInfo);
    }

    //eliminate the user from mess members array and returning a new array
    const eliminateMember = messExist._members.filter((item) => {
      return item.user != user_id;
    });

    let memberList = { _members: eliminateMember };
    await messExist.updateOne(memberList);

    messExist.find;
    return messToLeave;
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error,
    };
  }
};

module.exports = { createNewMess, joinMess, leaveMess };
