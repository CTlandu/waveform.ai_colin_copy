const pool = require("../config/db");

const registerForEvent = async (req, res) => {
    const client = await pool.connect();
    const userId = req.body.user_id;
    const { eventId } = req.params;

    try {
        const registrationCheck = await client.query(
            'SELECT * FROM registrations WHERE event_id = $1 AND user_id = $2',
            [eventId, userId]
        );

        if (registrationCheck.rows.length) {
            return res.status(400).json({ message: "Already registered for this event" });
        }

        const result = await client.query(
            'INSERT INTO registrations (event_id, user_id, status, registered_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
            [eventId, userId, 'confirmed']
        );

        res.status(200).json({ result: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

const unregisterFromEvent = async (req, res) => {
    const client = await pool.connect();
    const userId = req.body.user_id;
    const { eventId } = req.params;

    try {
        const result = await client.query(
            'DELETE FROM registrations WHERE event_id = $1 AND user_id = $2 RETURNING *',
            [eventId, userId]
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: "Registration not found" });
        }

        res.status(200).json({ result: result.rows[0], message: "Unregistered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};


module.exports = { registerForEvent, unregisterFromEvent };