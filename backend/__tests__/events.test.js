const request = require("supertest");
const app = require("../server");
const pool = require("../config/db");

describe('Events API Endpoints', () => {
    // Variable to store the specific event ID
    let eventID;
    let number_of_events;

    beforeAll(async () => {
        // Assuming a valid token is required
        const loginRes = await request(app).post("/api/users/login").send({
            email: "admin@email.com",
            password: "adminPassword"
        });

        expect(loginRes.statusCode).toBe(200);
    });

    test("Get all events", async () => {
        const res = await request(app).get("/api/events/get");
        console.log(res.body);

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.result).toBeInstanceOf(Array);
        number_of_events = res.body.result.length;
    });

    test("Create a new event", async () => {
        const res = await request(app)
            .post("/api/events/create")
            .send({
                name: "jestEvent",
                description: "jestDescription",
                date: "01/15/2025",
                time: "12:00",
                location: "jestLocation",
                organizer: 1,
                registration_deadline: "01/14/2025",
            });

        eventID = res.body.result.id;

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.result.name).toBe("jestEvent");
        expect(res.body.result.description).toBe("jestDescription");
        expect(res.body.result.date).toBe("2025-01-15T05:00:00.000Z");
        expect(res.body.result.time).toBe("12:00:00");
        expect(res.body.result.location).toBe("jestLocation");
        expect(res.body.result.organizer).toBe(1);
        expect(res.body.result.registration_deadline).toBe("2025-01-14T05:00:00.000Z");
    });

    test("Get all events after creating a new event", async () => {
        const res = await request(app).get("/api/events/get");
        //console.log(res.body);

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.result).toBeInstanceOf(Array);
        expect(res.body.result.length).toBe(number_of_events + 1);
    });

    test("Delete the event", async () => {
        expect(eventID).toBeDefined();
        const res = await request(app)
            .delete(`/api/events/${eventID}/delete`)

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

    afterAll(async () => {
        await pool.end();
        console.log("Postgres connection closed");
    });
});
