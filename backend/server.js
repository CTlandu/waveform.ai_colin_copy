// Code to start the server and connect to the database


//importing the necessary modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Load config and connect to the database
dotenv.config();
connectDB();


//Create an express app and use the necessary middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000; 

//Define the routes
const userRoutes = require("./routes/userRoutes");
console.log(userRoutes);
app.use("/users", userRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to the WaveForm.ai backend server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
