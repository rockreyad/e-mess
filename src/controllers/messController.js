const { request, response } = require("express");

const messService = require("../services/messService");

/**
 *
 * @param {request} req
 * @param {response} res
 */
const createMess = async (req, res) => {
  const { name, address, capacity, creator } = req.body;

  if (!name || !creator) {
    return res.send({
      status: "FAILED",
      data: {
        error: "All fields are required!",
      },
    });
  }
  try {
    const messInfo = { name, address, capacity, _creator: creator };
    const mess = await messService.createMess(messInfo);

    res.status(201).send({
      status: "OK",
      message: "Mess has been created!",
      data: mess,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const updateMess = (req, res) => {
  //TODO: updateMess should control by manager
};

const joinMess = async (req, res) => {
  const { userId, messId } = req.body;

  if (!userId || !messId) {
    return res.send({
      status: "FAILED",
      data: {
        error: "All fields are required!",
      },
    });
  }

  try {
    const joinInfo = { user_id: userId, mess_id: messId };
    const joinedMess = await messService.joinMess(joinInfo);
    res.status(200).send({
      status: "OK",
      message: "You have been Successfully joined a Mess!",
      data: joinedMess,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const leaveMess = async (req, res) => {
  const { userId, messId } = req.body;

  if (!userId || !messId) {
    return res.send({
      status: "FAILED",
      data: {
        error: "All the data requires",
      },
    });
  }

  const messInfo = {
    user_id: userId,
    mess_id: messId,
  };
  try {
    const leavedMess = await messService.leaveMess(messInfo);
    return res.status(200).send({
      status: "OK",
      message: "You have successfully removed from a mess",
      data: leavedMess,
    });
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  createMess,
  joinMess,
  leaveMess,
};
