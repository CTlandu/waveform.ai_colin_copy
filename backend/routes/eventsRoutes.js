//Event routes

// //importing the necessary modules
//const auth = require("../config/auth"); // Import the auth middleware

const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents, deleteEvent, getEventById } = require("../controllers/eventsController");


router.get("/get", getAllEvents);
router.post("/create", createEvent);
router.delete("/:id/delete", deleteEvent);
router.get("/:id/get", getEventById);

module.exports = router;