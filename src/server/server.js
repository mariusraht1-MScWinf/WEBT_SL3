const express = require("express");
const app = express();
const port = 3000;

app.get("/backend/helloworld", (req, res) => {
  res.send(["Hello", "World", "!"]);
});

app.listen(port, () => {
  console.log(`TL3 backend app listening at http://localhost:${port}`);
});
