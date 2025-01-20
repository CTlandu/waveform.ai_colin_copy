// eventsController
/*

const createEvent = async (req, res) => {
    try{
        const { name, description, date, time, location, organizer, registration_deadline } = req.body;//destructure body

        //check if event exists
        const existingEvent = await Event.findOne({name});
        if (existingEvent) return res.status(400).json({message: "event with same name already exists"});

        //Create event
        const event = await Event.create({name, description, date, time, location, organizer, registration_deadline});

        //Send the response
        res.status(200).json({result: event})


    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

const getAllEvents = async (req, res) => {
    try{
        //find all events
        const events = await Event.find();


        //Send the response
        res.status(200).json({result: events});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

const deleteEvent = async (req, res) => {
    try{
        //destructure id from params
        const { id } = req.params;
        
        //check if id is provided
        if (!id) return res.status(400).json({message: "Event ID not provided"});

        //find event by id and delete
        const event = await Event.findByIdAndDelete(id);

        //check if event exists
        if (!event) return res.status(404).json({message: "Event does not exist"});

        //Send the response
        res.status(200).json({result: event, message: "Event deleted successfully"});

    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {createEvent, getAllEvents, deleteEvent}; // Export the functions*/