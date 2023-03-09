const express = require("express");

const router = express.Router();

router.post("/:id/create_option", (req, resp) => {
  console.log(req.params.id);
  console.log("option created");
});

module.exports = router;
