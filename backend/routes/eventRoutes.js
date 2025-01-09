const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents } = require("../controllers/eventController");

router.get("/", getAllEvents);
router.post("/", createEvent);

module.exports = router;