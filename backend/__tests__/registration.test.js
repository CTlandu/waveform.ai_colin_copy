//Tests for registrations
const request = require("supertest");
const app = require("../server");
const pool = require("../config/db");

describe("Registration API", () => {
    let userId;
    let eventId;
    //before all
    beforeAll(async () => {
        const userRes = await request(app).post("/api/users/register").send({
            username: "registration test User",
            email: "reg@email.com",
            password: "password",
        });
        //console.log(userRes.body);
        expect(userRes.statusCode).toBe(200);
        userId = userRes.body.result.id;
        expect(userId).toBeDefined();
        //console.log("userId: ", userId);

        const eventRes = await request(app).post("/api/events/create").send({
            name: "registration test Event",
            description: "registration test Event description",
            date: "01/15/2025",
            time: "12:00",
            location: "registration test Location",
            organizer: 1,
            registration_deadline: "01/14/2025",
        });
        //console.log(eventRes.body);
        expect(eventRes.statusCode).toBe(200);
        eventId = eventRes.body.result.id;
        expect(eventId).toBeDefined();
        //console.log("eventId: ", eventId);

    });

    //test registration
    test("Register for an event", async () => {
        const res = await request(app)
            .post(`/api/registration/${eventId}/register`)
            .send({
                user_id: userId,
            });
        expect(res.statusCode).toBe(200);

    });

    //test unregistration
    test("Unregister from an event", async () => {
        const res = await request(app)
            .delete(`/api/registration/${eventId}/register`)
            .send({
                user_id: userId,
            });
        //console.log(res.body);
        expect(res.statusCode).toBe(200);
    });

    //after all
    afterAll(async () => {
        const userRes = await request(app).delete(`/api/users/${userId}/delete`);
        expect(userRes.statusCode).toBe(200);

        const eventRes = await request(app).delete(`/api/events/${eventId}/delete`);
        expect(eventRes.statusCode).toBe(200);

        pool.end();
    });


});