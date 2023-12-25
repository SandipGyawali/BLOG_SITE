const jwt = require("jsonwebtoken");

function createToken(id) {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "12h",
  });
}

function verifyToken(token) {
  if (token == "null") {
    return null;
  }
  try {
    const data = jwt.verify(token, process.env.SECRET, { complete: true });
    return data.payload.id;
  } catch (err) {
    console.log("Error Verifying token:", err);
    return null;
  }
}

module.exports = { createToken, verifyToken };
