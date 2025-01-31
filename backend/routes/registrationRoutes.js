const express = require("express");
//const auth = require("../config/auth");
const { registerForEvent, unregisterFromEvent, getRegisteredUsers } = require("../controllers/registrationController");

const router = express.Router();

router.post("/:eventId/register", registerForEvent);
router.delete("/:eventId/register", unregisterFromEvent);
router.get("/:eventId/get_registered_users", getRegisteredUsers);

module.exports = router;