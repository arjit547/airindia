const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Apache2 (Port 3001)");
});

app.listen(PORT, () => {
  console.log(`Service 2 running on port ${PORT}`);

});
