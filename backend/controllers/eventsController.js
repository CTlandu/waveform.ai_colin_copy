// eventsController using postgresql
const pool = require("../config/db");

//post <backend-server>/api/events/create
const createEvent = async (req, res) => {
    const client = await pool.connect();
    try {
    const { name, description, date, time, location, organizer, registration_deadline } = req.body;
    
    // Basic validation: ensure required fields are provided
    if (!name || !date || !organizer) {
        return res.status(400).json({ success: false, message: "Required fields are missing." });
    }
    
    // Check if event with the same name already exists
    const eventCheck = await client.query("SELECT * FROM events WHERE name = $1", [name]);
    if (eventCheck.rows.length > 0) {
        return res.status(400).json({ success: false, message: "Event with the same name already exists." });
    }
    
    // Insert the new event
    const event = await client.query(
    `INSERT INTO events (name, description, date, time, location, organizer, registration_deadline) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [name, description, date, time, location, organizer, registration_deadline]
    );
    
    res.status(200).json({ success: true, result: event.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server Error" });
    } finally {
        client.release();
    }
    };
    

//get <backend-server>/api/events/get
const getAllEvents = async (req, res) => {
    const client = await pool.connect();
    try{
        //find all events
        const events = await client.query("SELECT * FROM events");

        //Send the response
        res.status(200).json({success: true, result: events.rows});
    }catch(err){
        console.error(err);
        res.status(500).json({success: false, message: "Server Error"});
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
        if (!id) return res.status(400).json({sucess: false, message: "Event ID not provided"});

        //find event by id and delete
        const result = await client.query(
            "DELETE FROM events WHERE id = $1 RETURNING *",
            [id]
        );

        //check if event exists
        if (result.rows.length == 0) return res.status(404).json({success: false, message: "Event does not exist"});

        //Send the response
        res.status(200).json({success: true, result: result.rows[0], message: "Event deleted successfully"});

    }catch(err){
        console.error(err);
        res.status(500).json({success: false, message: "Server Error"});
    } finally {
        client.release();
    }
}

//put <backend-server>/api/events/:id/edit
const editEvent = async (req, res) => {
    const client = await pool.connect();
    try {
        const { id } = req.params;
        const { name, description, date, time, location, organizer, registration_deadline } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "Event ID is required." });
        }

        const findEvent = await client.query('SELECT * FROM events WHERE id = $1', [id]);
        if (findEvent.rows.length === 0) {
            return res.status(404).json({ success: false, message: "Event does not exist." });
        }

        const result = await client.query(
            `UPDATE events SET name = $1, description = $2, date = $3, time = $4, 
            location = $5, organizer = $6, registration_deadline = $7 WHERE id = $8 RETURNING *`,
            [name, description, date, time, location, organizer, registration_deadline, id]
        );

        res.status(200).json({ success: true, result: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server Error" });
    } finally {
        client.release();
    }
};
    


module.exports = {createEvent, getAllEvents, deleteEvent}; // Export the functions