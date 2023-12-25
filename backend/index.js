require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./models/db.js");
const userRoute = require("./routes/userRoute.js");

// connects to the database..
connectToDb(process.env.URI);

//used for parsing the incoming request data..
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening to the port ${process.env.PORT}`);
});
