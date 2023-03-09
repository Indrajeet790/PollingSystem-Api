// const { create } = require("../models/questionSchema");
const Question = require("../models/questionSchema");
const Option = require("../models/optionSchema");

// create question controller
module.exports.createQuestion = async (req, resp) => {
  console.log("create question");

  try {
    let question = await Question.create(req.body);
    if (question) {
      return resp.json({
        question,
        data: { message: "question created successfully" },
      });
    } else {
      return resp.status(500).json({
        message1: "Internal server error",
      });
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

// view question controller
module.exports.viewQuestion = async (req, resp) => {
  // console.log("view question");
  try {
    // populate from questionSchema file
    let question = await Question.findById(req.params.id).populate("options");

    return resp.json({ question });
  } catch (err) {
    return resp.status(500).json({
      data: {
        message: "Internal server error for viewing question",
      },
    });
  }
};

// delete question
module.exports.deleteQuestion = async (req, resp) => {
  console.log("delete question");

  try {
    let question = await Question.deleteMany();
    return resp.json({
      message: "all question deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
