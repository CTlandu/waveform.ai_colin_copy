const request = require("supertest");
const app = require("../server");
const pool = require("../config/db");

describe('Events API Endpoints', () => {
    //variable to eventually store the specific event id
    let eventID;
    //variable to store the number of events
    let number_of_events;

    test("Get all events", async () => {
        const res = await request(app).get("/api/events/get");

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBeInstanceOf(Object);
        number_of_events = res.body.result.rows.length;
    });

    test("Create a new event", async () => {
        const res = await request(app)
            .post("/api/events/create").send({
                name: "jestEvent",
                description: "jestDescription",
                date: "1/15/2025",
                time: "12:00",
                location: "jestLocation",
                organizer: 1,
                registration_deadline: "1/14/2025",
            })
        eventID = res.body.result.id;

        expect(res.statusCode).toBe(200);
        expect(res.body.result.name).toBe("jestEvent");
        expect(res.body.result.description).toBe("jestDescription");
        const eventDate = new Date(res.body.result.date);
        expect(res.body.result.date).toBe(eventDate.toISOString());
        expect(res.body.result.time).toBe("12:00:00");
        expect(res.body.result.location).toBe("jestLocation");
        expect(res.body.result.organizer).toBe(1);
        const regDeadline = new Date(res.body.result.registration_deadline);
        expect(res.body.result.registration_deadline).toBe(regDeadline.toISOString());
        expect(res.body.result.status).toBe("open");

    });

    test("Get all events after creating a new event", async () => {
        const res = await request(app).get("/api/events/get");

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBeInstanceOf(Object);
        expect(res.body.result.rows.length).toBe(number_of_events + 1);
    });

    test("Delete the event", async () => {
        expect(eventID).toBeDefined();
        const res = await request(app).delete(`/api/events/${eventID}/delete`);

        expect(res.statusCode).toBe(200);
    });

    //after all tests are done, close the postgres connection
    afterAll(async () => {
        await pool.end();
        console.log("Postgres connection closed");
    });

});