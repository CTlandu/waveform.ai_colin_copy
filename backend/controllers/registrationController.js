const { db } = require('../config/db');

const registerForEvent = async (req, res) => {
    try {
        const event_id = req.params.eventId;
        const { name, email, phone } = req.body;

        if (!event_id) return res.status(400).json({ success: false, message: "Event ID not provided" });
        if (!name || !email || !phone) return res.status(400).json({ success: false, message: "Missing required fields" });

        const [result] = await db.query(
            'INSERT INTO registrations (event_id, name, email, phone) VALUES (?, ?, ?, ?)',
            [event_id, name, email, phone]
          );

        res.status(200).json({ success: true, result: result, message: "Registered successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

const unregisterFromEvent = async (req, res) => {
    const client = await pool.connect();

    try {
        const userId = req.body.user_id;
        const { eventId } = req.params;
        const result = await client.query(
            'DELETE FROM registrations WHERE event_id = $1 AND user_id = $2 RETURNING *',
            [eventId, userId]
        );

        if (!result.rows.length) {
            return res.status(404).json({ success:false, message: "Registration not found" });
        }

        res.status(200).json({ success: true, result: result.rows[0], message: "Unregistered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

module.exports = { registerForEvent, unregisterFromEvent };