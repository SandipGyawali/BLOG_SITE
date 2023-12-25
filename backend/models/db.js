const mongoose = require("mongoose");

async function connectToDb(url) {
  return mongoose.connect(url).then(() => {
    console.log("Connected to the Database");
  });
}

module.exports = connectToDb;
