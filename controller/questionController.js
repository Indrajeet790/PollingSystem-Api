const { create } = require("../models/questionSchema");
const Question = require("../models/questionSchema");

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
      return res.status(500).json({
        message1: "Internal server error",
      });
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
module.exports.viewQuestion = async (req, resp) => {
  console.log("view question");
};
