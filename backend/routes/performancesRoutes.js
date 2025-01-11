//Performances routes

//Import necessary modules
const express = require("express");
const router = express.Router();
const { createPerformance, getAllPerformances } = require("../controllers/performancesController");

router.get("/get", getAllPerformances);
router.post("/create", createPerformance);

module.exports = router;
