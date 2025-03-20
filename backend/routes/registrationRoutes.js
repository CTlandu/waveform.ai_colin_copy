const express = require("express");
//const auth = require("../config/auth");
const { registerForEvent, unregisterFromEvent, getAllRegistrations } = require("../controllers/registrationController");

const router = express.Router();

router.post("/:eventId/register", registerForEvent);
router.delete("/:eventId/unregister", unregisterFromEvent);
router.get("/get", getAllRegistrations);

module.exports = router;