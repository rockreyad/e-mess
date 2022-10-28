const db = require("../database/models");
const Sheet = require("../database/Sheet");
const Mess = db.Mess;
const Category = db.Category;

const createSheet = async (sheetInfo) => {
  try {
    //Generate "Month Year" for title
    const today = new Date();
    let currentMonYear = today.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    //Get Member List
    const getMessInfo = await Mess.findOne({
      mess_id: sheetInfo.mess_id,
    }).select("_members mess_id manager");

    //Filter userId from Mess Member List
    const messMemberList = getMessInfo._members.map((item) => ({
      userInfo: item.user._id,
      mealStatus: true,
    }));

    const initialCategory = await Category.find();

    const sheetToCreate = {
      ...sheetInfo,
      month: currentMonYear,
      mess: getMessInfo._id,
      members: messMemberList,
      manager: getMessInfo.manager._id,
      messObjectId: getMessInfo._id,
      categories: {
        initial: [...initialCategory.map((cat) => cat.id)],
        custom: ["rent", "electricity", "internet", "chef"],
      },
    };

    const createdSheet = await Sheet.createSheet(sheetToCreate);
    return createdSheet;
  } catch (error) {
    throw error;
  }
};

const updateSheet = async (sheetInfo) => {
  try {
    const sheetToUpdate = {
      ...sheetInfo,
    };

    const updatedSheet = await Sheet.updateSheet(sheetToUpdate);
    return updatedSheet;
  } catch (error) {
    throw error;
  }
};

module.exports = { createSheet, updateSheet };
