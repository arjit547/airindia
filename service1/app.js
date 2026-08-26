const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello jack,  Service 1 on reporting (Port 3000)");
});

app.listen(PORT, () => {
  console.log(`Service 1 running on port ${PORT}`);
});
