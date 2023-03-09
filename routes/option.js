const express = require("express");

const router = express.Router();
const optionController = require("../controller/optionController");

router.post("/:id/create_option", optionController.createOption);

router.get("/:id/add_vote", optionController.addVote);

module.exports = router;
