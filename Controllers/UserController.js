const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "Please provide all fields" });
  }
  console.log(username, email, password);

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json({ message: "User already exists" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!user) {
      res.status(400).json({ message: "Invalid user data" });
    }
    res
      .status(201)
      .json({ _id: user._id, username: user.username, email: user.email });
    console.log(user);
  }
});
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please provide all fields" });
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign({
      user: { username: user.username, email: user.email, id: user.id },
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d"
    });
    res.status(200).json({accessToken : accessToken});
  }else{
    res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login user" });
});
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  userRegister,
  userLogin,
  currentUser,
};
