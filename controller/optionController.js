const Question = require("../models/questionSchema");
const Option = require("../models/optionSchema");

// create option for question using provided id
module.exports.createOption = async (req, resp) => {
  console.log("create Option");

  try {
    let id = req.params.id;
    let question = await Question.findById(id);

    if (question) {
      let option = await Option.create({
        content: req.body.content,
        question: req.params.id,
      });
      option.save();
      question.options.push(option);
      question.save();

      return resp.json({
        option,
        data: {
          message: "option created",
        },
      });
    }
    return resp.json({ question });
  } catch (err) {
    console.log("Error:", err);
  }
};
