// Importing the necessary modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const swaggerIo = require('swagger-ui-express');
const YAML = require("yamljs");
const userApiSpecs = YAML.load("./docs/user-api-spec.yaml");
const eventApiSpecs = YAML.load("./docs/event-api-spec.yaml");

// Load config and connect to the database
dotenv.config();

// Create an express app and use the necessary middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000; 

// Landing page for API documentation
app.get("/api-docs", (req, res) => {
  const apiDocsList = `
  <html>
      <head><title>API Documentation</title></head>
      <body>
          <h1>API Documentation Index</h1>
          <ul>
              <li><a href="/api-docs/user">Users API Documentation</a></li>
              <li><a href="/api-docs/event">Events API Documentation</a></li>
          </ul>
      </body>
  </html>`;
  res.send(apiDocsList);
});

// Use the swagger documents
app.use("/api-docs/user", swaggerIo.serve, (req, res, next) => {
  swaggerIo.setup(userApiSpecs)(req, res, next);
});
app.use("/api-docs/event", swaggerIo.serve, (req, res, next) => {
  swaggerIo.setup(eventApiSpecs)(req, res, next);
});

// Define the routes
const userRoutes = require("./routes/userRoutes"); // User routes
app.use("/api/users", userRoutes);

const eventRoutes = require("./routes/eventsRoutes"); // Event routes
app.use("/api/events", eventRoutes);

const registrationRoutes = require("./routes/registrationRoutes"); // Registration routes
app.use("/api/registration", registrationRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the WaveForm.ai backend server!");
});

// Start the server only if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export the app for testing
module.exports = app;