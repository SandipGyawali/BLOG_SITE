const { verifyToken } = require("../utils/Token");
const User = require("../models/usersModel");

async function restricted(req, res, next) {
  const secretId = req.headers["authorization"];
  if (!secretId) {
    return res.json({
      status: false,
      msg: "The User must be logged in to post the blog.",
    });
  }
  try {
    const token = secretId.split(" ")[1];
    // token exits then verify the token
    const userId = verifyToken(token);
    // check for the token verification..
    if (userId == "token expired") {
      return res.json({
        err: "token expired. Please re-login",
        redirect: "login",
      });
    }

    if (!userId) {
      throw new Error("login first");
    }
    const user = await User.findById(userId);
    req.user = user;
    next();
  } catch (err) {
    console.log(err.message);
    return res.json({ error: err.message });
  }
}

module.exports = { restricted };
