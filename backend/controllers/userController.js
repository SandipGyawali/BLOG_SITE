const User = require("../models/usersModel");
const { createToken } = require("../utils/Token");

// handles the login route..
async function handleLogin(req, res) {
  const { email, password } = req.body;

  if (!email && !password)
    return res.json({ errorMsg: "email and password field cannot be empty." });

  const user = await User.findOne({ email: email });

  if (!user)
    return res.json({
      errorMsg: "user with this email doesn't exists..",
      error: true,
    });

  const comparePwd = await user.validatePassword(password);

  if (!comparePwd)
    return res.json({ errorMsg: "Password invalid. Enter correct Password" });

  const token = createToken(user._id);

  res.json({ status: "ok", token, user: user._id });
}

// handles the signup route..
async function handleSignUp(req, res) {
  const { username, email, password } = req.body;

  if (!email && !password && !username)
    return res.json({ errMsg: "input field cannot be empty.." });

  const exists = await User.findOne({ email });

  if (exists)
    return res.json({
      errorMsg: "user already exists try login.",
      error: true,
    });

  const user = await User.create({ username, email, password });

  if (!user) return res.json({ errorMsg: "user cannot be created" });

  res.json({ status: "ok" });
}

module.exports = { handleLogin, handleSignUp };
