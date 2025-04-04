# WaveformAI-Website

Only a basic react setup has been implemented so for

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js] (https://nodejs.org) (Latest version recommended, current testing on v22.12.0)
- [npm] (comes with Node.js)
- [Git] (to clone the repository)

## Current Setup Instructions:

### 1. Clone the Repository

In your terminal: \
git clone https://github.com/WaveformAI/WaveformAI-Website.git \
cd WaveformAI-Website

### 2. Install Dependencies

#### frontend:

cd frontend \
npm install

#### backend:

cd ../backend \
npm install

### 3. Run the Application

#### run backend server (when inside backend folder)

node server.js

#### run frontend server

cd ../frontend 

npm run dev

### 5. Access the Website

Open your browser and navigate to the url(localhost:5173, in default) provided in your terminal

### API Documentation

A comprehensive list of all available API documentation can be accessed using Swagger. Navigate to the following base URL to explore the documentation:

`<backend-server>/api-docs/`

From there, you can find links to the specific API documentation pages:

- `<backend-server>/api-docs/user`  
  Documentation for managing user-related data.

- `<backend-server>/api-docs/event`  
  Documentation for managing events in the system.

## Running Using Docker/Podman

After installing [Docker Deskop](https://docs.docker.com/desktop/), you're able to
run the components here in a way similar to how things will run in production.

After cloning this repository run `docker compose build` to build the container
images.

Then run `docker compose up` to start the frontend, backend, and a MySQL compatible
database. Running `docker compose down` will stop everything.

The backend will automatically be configured to connect to the database.

After making changes be sure to run `docker compose build` again to ensure the
latest image is being used.