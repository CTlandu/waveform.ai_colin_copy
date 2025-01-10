// performancesController
const Performance = require("../models/performance"); // Import the performance model

const createPerformance = async (req, res) => {
    try{
        //destructure the body
        const { name, description, date, time, location } = req.body;

        //check if performance exists
        const existingPerformance = await Performance.findOne({name});
        if (existingPerformance) return res.status(400).json({message: "a performance with same name already exists"});

        //Create the performance
        const performance = await Performance.create({name, description, date, time, location});

        //Send the response
        res.status(200).json({result: performance})

    }catch(err){
        console.log(err)
        res.status(500).json({message: "service error"});
    }
}

const getAllPerformances = async (req, res) => {
    try{
        const performances = await Performance.find();
        res.status(200).json(performances)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "service error"})
    }
}

module.exports = {createPerformance, getAllPerformances}; //Export the functions