// eventsController
const { db } = require("../config/db");

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
    try {
        // Log to confirm database pool creation
        console.log("Querying the database...");
        
        // Attempt to find all events
        const [events] = await db.query("SELECT * FROM events");

        // Send the successful response
        res.status(200).json({ success: true, result: events });
    } catch (err) {
        // Log the error details
        console.error("Error occurred:", err);
        
        // Check if it's a connection-related issue
        if (err.code === 'ECONNREFUSED') {
            res.status(500).json({ success: false, message: "Database connection refused. Please check the connection settings." });
        } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ success: false, message: "Database access denied. Check your credentials." });
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ success: false, message: "Database not found. Ensure the database exists." });
        } else {
            // General error handling for other cases
            res.status(500).json({ success: false, message: "Server error. Please try again later." });
        }
    }
};


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

//get <backend-server>/api/events/:id/get
const getEventById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ success: false, message: "Event ID is required." });
        }

        // Use the correct query syntax for mysql2 with promises
        const [event] = await db.query('SELECT * FROM events WHERE id = ?', [id]);

        if (event.length === 0) {
            return res.status(404).json({ success: false, message: "Event not found." });
        }

        res.status(200).json({ success: true, result: event[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


module.exports = {createEvent, getAllEvents, deleteEvent, getEventById}; // Export the functions