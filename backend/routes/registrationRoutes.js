const express = require("express");
//const auth = require("../config/auth");
const { registerForEvent, unregisterFromEvent, getRegisteredUsers } = require("../controllers/registrationController");

const router = express.Router();

router.post("/:eventId/register", registerForEvent);
router.delete("/:eventId/unregister", unregisterFromEvent);
router.get("/:eventId/participants", getRegisteredUsers);

module.exports = router;