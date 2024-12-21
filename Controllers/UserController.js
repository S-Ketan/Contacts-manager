const asyncHandler = require("express-async-handler");

const userRegister = asyncHandler(async (req, res) => {
res.json({message: "Register user"});
});
const userLogin = asyncHandler(async (req, res) => {
res.json({message: "Login user"});
});
const currentUser = asyncHandler(async (req, res) => {
res.json({message: "Current user"});
});

module.exports = {
userRegister,
userLogin,
currentUser,
};