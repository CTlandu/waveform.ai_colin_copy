// userRoutes
const express = require("express");
const { registerUser, loginUser  } = require("../controllers/userController"); // Import the user controllers
const router = express.Router(); // Create a new router

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Users endpoint is working!' });
});


router.post("/register", registerUser);
router.post("/login", loginUser);
//router.put("/update", updateUser);


module.exports = router;