const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");


const userRegister = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please provide all fields");
    }

    const userAvailable = await User.findOne({email});
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);

        const user = await User.create({username, email, password:hashedPassword});
        if (!user) {
            res.status(400);
            throw new Error("Invalid user data");
        }
        res.status(201).json({_id : user._id, username: user.username, email: user.email});
        console.log(user);
    
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