// eventController
const Event = require("../models/event"); // Import the event model

const createEvent = async (req, res) => {
    try{
        const { name, description, date, time, location, organizer } = req.body;//destructure body

        //check if event exists
        const existingEvent = await Event.findOne({name});
        if (existingEvent) return res.status(400).json({message: "event with same name already exists"});

        //Create event
        const event = await Event.create({name, description, date, time, location, organizer});

        //Send the response
        res.status(200).json({result: event})


    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

const getAllEvents = async (req, res) => {
    try{
        const events = await Event.find();
        res.status(200).json(events);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {createEvent, getAllEvents}; // Export the functions