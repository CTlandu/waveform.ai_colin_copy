// userController
const User = require("../models/user"); // Import the User model
const bcrypt = require("bcryptjs"); // Import bcrypt
const jwt = require("jsonwebtoken"); // Import jsonwebtoken

const registerUser = async (req, res) => {
    try{
        const { username, email, password } = req.body; // Destructure the request body

        // Check if the user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: "User already exists"});

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create the user
        const user = await User.create({username, email, password: hashedPassword});

        // Create a token
        const token = jwt.sign({email: user.email, id: user._id}, "test", {expiresIn: "1h"});

        // Send the response
        res.status(200).json({result: user, token});

    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body; // Destructure the request body

        // Check if the user exists
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message: "User does not exist"});

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) return res.status(400).json({message: "Invalid credentials"});

        //Create Token
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn: "1h"});

        //Send the response
        res.status(200).json({result: existingUser, token});

    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}


module.exports = { registerUser, loginUser }; // Export the functions