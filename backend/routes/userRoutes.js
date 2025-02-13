// userRoutes
const express = require("express");
const { registerUser, loginUser, updateUser, resetPassword, adminUpdate, deleteUser  } = require("../controllers/userController"); // Import the user controllers
const router = express.Router(); // Create a new router

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Users endpoint is working!' });
});

router.delete("/:id/delete", deleteUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/:id/update", updateUser);
router.patch("/:id/update_password", resetPassword);
router.patch("/:id/admin_update", adminUpdate);


module.exports = router;