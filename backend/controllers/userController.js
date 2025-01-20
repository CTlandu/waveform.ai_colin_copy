// userController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

//post <backend-server>/api/users/register
const registerUser = async (req, res) => {
    const client = await pool.connect();
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const userCheck = await client.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (userCheck.rows.length) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Insert user
        const result = await client.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );

        const user = result.rows[0];
        const token = jwt.sign({ email: user.email, id: user.id }, "test", { expiresIn: "1h" });
        
        res.status(200).json({ result: user, token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

//post <backend-server>/api/users/login
const loginUser = async (req, res) => {
    const client = await pool.connect();
    try {
        const { email, password } = req.body;

        const result = await client.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email: user.email, id: user.id }, "test", { expiresIn: "1h" });
        res.status(200).json({ result: user, token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

//patch <backend-server>/api/users/:id/update
const updateUser = async (req, res) => {
    const client = await pool.connect();
    try {
        const updates = req.body;
        const userID = req.params.id;

        if (!userID) return res.status(400).json({ message: "User ID is required" });
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No fields provided for update." });
        }

        const restrictedUpdateFields = ["role", "permissions", "status", "password"];
        for (const field of Object.keys(updates)) {
            if (restrictedUpdateFields.includes(field)) {
                return res.status(403).json({ message: `Field ${field} cannot be updated` });
            }
        }

        // Dynamically create update query
        const setClause = Object.keys(updates)
            .map((key, index) => `${key} = $${index + 1}`)
            .join(', ');
        const values = [...Object.values(updates), userID];

        const result = await client.query(
            `UPDATE users SET ${setClause} WHERE id = $${values.length} RETURNING *`,
            values
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ result: result.rows[0] });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

//patch <backend-server>/api/users/:id/update_password
const resetPassword = async (req, res) => {
    const client = await pool.connect();
    try {
        const userID = req.params.id;
        const { old_password, new_password } = req.body;

        if (!userID) return res.status(400).json({ message: "User ID required" });
        if (!new_password) return res.status(400).json({ message: "No new password provided" });

        // Get user
        const userResult = await client.query(
            'SELECT * FROM users WHERE id = $1',
            [userID]
        );

        if (!userResult.rows.length) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const user = userResult.rows[0];
        const isMatch = await bcrypt.compare(old_password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const hashedPassword = await bcrypt.hash(new_password, 10);

        const result = await client.query(
            'UPDATE users SET password = $1 WHERE id = $2 RETURNING *',
            [hashedPassword, userID]
        );

        res.status(200).json({ result: result.rows[0] });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

//patch <backend-server>/api/users/:id/update
const adminUpdate = async (req, res) => {
    const client = await pool.connect();
    try {
        const updates = req.body;
        const userID = req.params.id;

        if (!userID) return res.status(400).json({ message: "User ID is required" });
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No fields provided for update." });
        }

        const restrictedUpdateFields = ["username", "email", "password"];
        for (const field of Object.keys(updates)) {
            if (restrictedUpdateFields.includes(field)) {
                return res.status(403).json({ message: `Field ${field} cannot be updated` });
            }
        }

        // Handle array type for permissions if it exists
        if (updates.permissions) {
            updates.permissions = Array.isArray(updates.permissions) ? updates.permissions : [updates.permissions];
        }

        const setClause = Object.keys(updates)
            .map((key, index) => `${key} = $${index + 1}`)
            .join(', ');
        const values = [...Object.values(updates), userID];

        const result = await client.query(
            `UPDATE users SET ${setClause} WHERE id = $${values.length} RETURNING *`,
            values
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ result: result.rows[0] });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

//delete <backend-server>/api/users/:id/delete
const deleteUser = async (req, res) => {
    const client = await pool.connect();
    try {
        const userID = req.params.id;

        if (!userID) return res.status(400).json({ message: "User ID required" });

        const result = await client.query(
            'DELETE FROM users WHERE id = $1 RETURNING *',
            [userID]
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ result: result.rows[0], message: "User deleted" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    } finally {
        client.release();
    }
};

module.exports = { registerUser, loginUser, updateUser, resetPassword, adminUpdate, deleteUser };