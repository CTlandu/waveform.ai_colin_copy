//Performances routes

//Import necessary modules
const express = require("express");
const router = express.Router();
const { createPerformance, getAllPerformances, deletePerformance } = require("../controllers/performancesController");

router.get("/get", getAllPerformances);
router.post("/create", createPerformance);
router.delete("/:id/delete", deletePerformance);

module.exports = router;
