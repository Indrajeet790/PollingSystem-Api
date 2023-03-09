const express = require("express");
const questionController = require("../controller/questionController");
// create a new router objects
const router = express.Router();

router.post("/create", questionController.createQuestion);

router.get("/view", questionController.viewQuestion);

module.exports = router;
