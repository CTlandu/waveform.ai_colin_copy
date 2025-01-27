// eventsController using postgresql
const pool = require("../config/db");

//post <backend-server>/api/events/create
const createEvent = async (req, res) => {
    const client = await pool.connect();
    try{
        const { name, description, date, time, location, organizer, registration_deadline } = req.body;//destructure body

        //check if event exists
        const eventCheck = await pool.query(
            "SELECT * FROM events WHERE name = $1",
            [name]
        );

        const existingEvent = eventCheck.rows[0];

        if (existingEvent) return res.status(400).json({message: "event with same name already exists"});

        //Insert event
        const event = await pool.query(
            "INSERT INTO events (name, description, date, time, location, organizer, registration_deadline) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [name, description, date, time, location, organizer, registration_deadline]
        );

        //Send the response
        res.status(200).json({result: event.rows[0]});


    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    } finally {
        client.release();
    }
}

//get <backend-server>/api/events/get
const getAllEvents = async (req, res) => {
    const client = await pool.connect();
    try{
        //find all events
        const events = await pool.query("SELECT * FROM events");

        //Send the response
        res.status(200).json({result: events});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    } finally {
        client.release();
    }
}

//delete <backend-server>/api/events/:id/delete
const deleteEvent = async (req, res) => {
    const client = await pool.connect();
    try{
        //destructure id from params
        const { id } = req.params;
        
        //check if id is provided
        if (!id) return res.status(400).json({message: "Event ID not provided"});

        //find event by id and delete
        const result = await pool.query(
            "DELETE FROM events WHERE id = $1 RETURNING *",
            [id]
        );

        //check if event exists
        if (!result.rows.length) return res.status(404).json({message: "Event does not exist"});

        //Send the response
        res.status(200).json({result: result.rows[0], message: "Event deleted successfully"});

    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    } finally {
        client.release();
    }
}

//put <backend-server>/api/events/:id/edit
const editEvent = async (req, res) => {
    const client = await pool.connect();
    try{
        
        return

    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }finally{
        client.release();
    }

}

module.exports = {createEvent, getAllEvents, deleteEvent}; // Export the functions