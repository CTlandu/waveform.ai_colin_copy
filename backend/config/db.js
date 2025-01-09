//Database connection setup
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();    

const URI = process.env.MONGO_URI; // MongoDB connection string

// Connect to MongoDB
const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("MongoDB connection SUCCESS");
    }catch(error){
        console.error("MongoDB connection FAIL");
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB; // Export the function