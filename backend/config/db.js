// config/db.js
require('dotenv').config();
const mysql = require('mysql2/promise');  // This is correct, you're using the promise-based version

const useProductionDB = process.env.IN_PRODUCTION === 'true';

let db;

if (useProductionDB) {
    console.log("Connecting to external wm db...");
    db = mysql.createPool({ // Using createPool() instead of createConnection() for pooled connections
        host: process.env.MDB_HOST,
        port: process.env.MDB_PORT,
        user: process.env.MDB_USER,
        password: process.env.MDB_PASSWORD,
        database: process.env.MDB_NAME,
        waitForConnections: true, // Ensures pooling works properly
        connectionLimit: 10, // Max number of connections in the pool
        queueLimit: 0 // Unlimited queue length
    });
} else {
    console.log("Connecting to local MariaDB...");
    db = mysql.createPool({ // Also use createPool() for local DB
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}

module.exports = { db };
