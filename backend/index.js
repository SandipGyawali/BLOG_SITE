const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port ${process.env.PORT}`);
});
