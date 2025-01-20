// config/db.js
//configure .env
require('dotenv').config();
const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Test the connection
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Successfully connected to PostgreSQL database');
    }
});

module.exports = pool;