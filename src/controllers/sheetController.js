const sheetService = require("../services/sheetService");

const createSheet = async (req, res) => {
  const { messId } = req.body;

  if (!messId) {
    return res.status(400).send({
      status: "FAILED",
      error: "Mess Id can't be Empty!",
    });
  }

  const sheetInfo = {
    mess_id: messId,
  };
  try {
    const createdSheet = await sheetService.createSheet(sheetInfo);

    res.status(201).send({
      status: "OK",
      message: "Sheet has been created!",
      data: createdSheet,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const updateSheet = async (req, res) => {
  const { messId, managerId, month, status, members } = req.body;
  const sheetInfo = {
    month,
    messObjectId: messId,
    manager_id: managerId,
    status,
    members,
  };
  try {
    const updatedSheet = await sheetService.updateSheet(sheetInfo);
    res.status(200).send({
      status: "SUCCESS",
      message: "Sheet has been updated!",
      data: updatedSheet,
    });

    return;
  } catch (error) {
    res.status(error?.status).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};
module.exports = { createSheet, updateSheet };
