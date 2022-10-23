const Mess = require("../database/Mess");

const createMess = async (newMess) => {
  try {
    // FIXME: creator isn't appending in _members
    const messToInsert = {
      ...newMess,
      _members: [],
      mess_id: Math.random().toString(36).substr(2, 6).toUpperCase(),
    };

    const user = newMess._creator;
    messToInsert._members.push({ user: user });
    const createdNewMess = await Mess.createNewMess(messToInsert);
    return createdNewMess;
  } catch (error) {
    throw error;
  }
};

const joinMess = async (joinInfo) => {
  try {
    // const userExist = await User.findById({ _id: user }).select("_id");\

    // TODO: userId will append in _member with join date
    const messToJoin = {
      ...joinInfo,
    };

    const joinedMess = await Mess.joinMess(messToJoin);
    return joinedMess;
  } catch (error) {
    throw error;
  }
};

const leaveMess = async (messInfo) => {
  const messToLeave = {
    ...messInfo,
  };
  try {
    const leavedMess = await Mess.leaveMess(messToLeave);
    return leavedMess;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMess,
  joinMess,
  leaveMess,
};
