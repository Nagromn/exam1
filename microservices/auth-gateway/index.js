const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Auth Gateway OK");
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log("Auth Gateway running on port", port);
});
