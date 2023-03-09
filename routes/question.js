const express = require("express");
// create a new router objects
const router = express.Router();

router.post("/create", (req, resp) => {
  console.log("question is created");
});

module.exports = router;
