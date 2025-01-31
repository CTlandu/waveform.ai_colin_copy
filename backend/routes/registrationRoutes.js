const express = require("express");
//const auth = require("../config/auth");
const { registerForEvent, unregisterFromEvent } = require("../controllers/registrationController");

const router = express.Router();

router.post("/:eventId/register", registerForEvent);
router.delete("/:eventId/register", unregisterFromEvent);

module.exports = router;