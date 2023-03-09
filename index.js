const express = require("express");
const app = express();
const port = 8010;

app.listen(port, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log(`Server is running on ${port}`);
  }
});
