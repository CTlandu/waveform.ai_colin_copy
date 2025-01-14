// userController
const User = require("../models/user"); // Import the User model
const bcrypt = require("bcryptjs"); // Import bcrypt
const jwt = require("jsonwebtoken"); // Import jsonwebtoken

//function to register user #####  currently expects a username, email and password to be provided in the request body
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

//function to login user #####  currently expects an email and password to be provided in the request body
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

//function to update user #####  currently expects a user id as a parameter and fields to be updated to be provided in the request body
const updateUser = async (req, res) => {
    try{
        const updates = req.body; //get the request body
        const userID = req.params.id; //get user id

        //Check if userId is provided
        if (!userID) return res.status(400).json({message: "User ID is required"});

        //Check if any updates are provided
        if (!updates || Object.keys(updates).length == 0) return res.status(400).json({message: "No fields provided for update."});

        // Restrict certain fields from being updated
        const restrictedUpdateFields = ["role", "permissions", "status", "password"]; //fields that cannot be updated
        for (const field of Object.keys(updates)){
            if (restrictedUpdateFields.includes(field)) return res.status(403).json({message: `Field ${field} cannot be updated`});
        }

        //Update user in database
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $set: updates },
            { new: true, runValidators: true} 
        );

        //If no user was found, return error
        if (!updatedUser) return res.status(404).json({message: "User not found"});


        //send the response
        res.status(200).json({result: updatedUser});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
}

//function to reset password #####  currently expects a user id as a parameter and the old password and new password to be provided in the request body
//the old password is used to verify the user before updating the password
const resetPassword = async (req, res) => {
    try{
        const userID = req.params.id; //get user id

        //check if UserID is provided
        if (!userID) return res.status(400).json({message: "User ID required"});

        // Check if the user exists
        const existingUser = await User.findById(userID);
        if (!existingUser) return res.status(404).json({message: "User does not exist"});

        const { old_password, new_password } = req.body;

        // Check if the password is correct
        const isMatch = await bcrypt.compare(old_password, existingUser.password);
        if (!isMatch) return res.status(400).json({message: "Invalid credentials"});

        //check if new password is provided
        if (!new_password) return res.status(400).json({message: "No new password provided"});

        //Hash new password
        const hashedPassword = await bcrypt.hash(new_password, 10);

        //update password in database
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $set: {password: hashedPassword} },
            {new: true, runValidators: true}
        );

        //return error if user is not found
        if (!updateUser) return res.status(404).json({message: "User not found"});

        //send the response
        res.status(200).json({result: updateUser});

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
}

//function to update user role #####  currently expects a user id as a parameter and the role to be updated to be provided in the request body
//updates role or permissions of a user
//ADMIN ONLY 
const adminUpdate = async (req, res) => {
    try{
        const updates = req.body;
        const userID = req.params.id;

        //Check if userId is provided
        if (!userID) return res.status(400).json({message: "User ID is required"});

        //Check if any updates are provided
        if (!updates || Object.keys(updates).length == 0) return res.status(400).json({message: "No fields provided for update."});

        //Restrict certain fields from being updated with this function
        const restrictedUpdateFields = ["username", "email", "password"]; //fields that cannot be updated
        for (const field of Object.keys(updates)){
            if (restrictedUpdateFields.includes(field)) return res.status(403).json({message: `Field ${field} cannot be updated`});
        }

        //Update user in database
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $set: updates },
            { new: true, runValidators: true}
        )

        //If no user was found, return error
        if (!updatedUser) return res.status(404).json({message: "User not found"});

        //send the response
        res.status(200).json({result: updatedUser});

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }

}

//function to delete user #####  currently expects a user id as a parameter
const deleteUser = async (req, res) => {
    try{
        const userID = req.params.id; //get user id

        //Check if userId is provided
        if (!userID) return res.status(400).json({message: "User ID required"});

        //Delete user from database
        const deletedUser = await User.findByIdAndDelete(userID);

        //If no user was found, return error
        if (!deletedUser) return res.status(404).json({message: "User not found"});

        //Send the response
        res.status(200).json({result: deletedUser, message: "User deleted"});

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = { registerUser, loginUser, updateUser, resetPassword, adminUpdate, deleteUser }; // Export the functions