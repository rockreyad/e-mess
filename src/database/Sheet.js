const db = require("./models");
const Sheet = db.Sheet;

//TODO
/**
 *
 * valid sheet refers current month
 * Manager Can only create update sheet
 * Manager only can request to delete the sheet
 * at least 2 vote need to delete the sheet
 *
 */

//REVIEW:
/**
 * A sheet is creating for a specific mess
 * At least 2 member need to create a sheet
 * Valid Sheet refers Current Month
 */
const createSheet = async (sheetInfoToCreate) => {
  const { messObjectId, month, members } = sheetInfoToCreate;
  try {
    //WARN already a mess Database Calling in Service Layer

    const sheetInfo = await Sheet.findOne({
      mess: messObjectId,
      month: month,
    }).select("mess month");

    if (sheetInfo) {
      throw {
        status: 406,
        message: "A sheet already created for this month",
      };
    }

    if (members.length <= 1) {
      throw {
        status: 406,
        message: "At least 2 members need",
      };
    }
    const sheet = new Sheet(sheetInfoToCreate);

    await sheet.save();
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error,
    };
  }

  const createdSheetInfo = {
    month,
  };
  return createdSheetInfo;
};

/**
 * Only Manager Can update Sheet
 * Manager Can request to delete the sheet
 * at least 50% member vote need to delete the sheet(if 5 member vote need 3)
 *
 */
const updateSheet = async (sheetInfoToUpdate) => {
  const { manager_id, members, status, messObjectId, month } =
    sheetInfoToUpdate;
  const getSheet = await Sheet.findOne({
    month: month,
    mess: messObjectId,
  }).select("month status mess");

  if (!getSheet) {
    throw {
      status: 404,
      message: "No sheet found",
    };
  }

  if (getSheet?.manager !== manager_id) {
    throw {
      status: 401,
      message: "Only Manager can update sheet!",
    };
  }

  if (getSheet?.status !== true) {
    throw {
      status: 403,
      message: "This sheet has been closed!",
    };
  }

  //REVIEW: if status given in the body and if the sheet is refer current month then it will closed if status=false
  if (!status) {
    let sheetStatus = { status: false };
    await getSheet.updateOne(sheetStatus);
  }

  const updateSheet = {
    month: month,
    mess: messObjectId,
    status: status,
  };
  return updateSheet;
};

//
const deleteSheet = async (sheetInfoToDelete) => {};
module.exports = { createSheet, updateSheet };
