//Event routes

// //importing the necessary modules
const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents } = require("../controllers/eventsController");


router.get("/get", getAllEvents);
router.post("/create", createEvent);

module.exports = router;