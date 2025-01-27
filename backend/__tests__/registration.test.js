//Tests for registrations
const request = require("supertest");
const app = require("../server");
const pool = require("../config/db");

describe('Event Registrations', () => {
    let token;
    let userId;
    let eventId;

    beforeAll(async () => {
        // Create test user and get token
        const userRes = await request(app)
            .post("/api/users/register")
            .send({
                username: "regtest",
                email: "regtest@test.com",
                password: "testpass123"
            });
        
        token = userRes.body.token;
        userId = userRes.body.result.id;

        // Create test event
        const eventRes = await request(app)
            .post("/api/events/create")
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: "Registration Test Event",
                description: "Test Description",
                date: "2025-01-15",
                time: "12:00",
                location: "Test Location",
                registration_deadline: "2025-01-14"
            });
        
        eventId = eventRes.body.result.id;
    });

    test("Register for event", async () => {
        const res = await request(app)
            .post(`/api/events/${eventId}/register`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toHaveProperty('event_id', eventId);
        expect(res.body.result).toHaveProperty('user_id', userId);
    });

    test("Cannot register twice for same event", async () => {
        const res = await request(app)
            .post(`/api/events/${eventId}/register`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('message', 'Already registered for this event');
    });

    test("Get event participants", async () => {
        const res = await request(app)
            .get(`/api/events/${eventId}/participants`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.participants).toBeInstanceOf(Array);
        expect(res.body.participants.length).toBe(1);
    });

    test("Cancel registration", async () => {
        const res = await request(app)
            .delete(`/api/events/${eventId}/register`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
    });

    afterAll(async () => {
        // Clean up test event and user
        await request(app)
            .delete(`/api/events/${eventId}/delete`)
            .set('Authorization', `Bearer ${token}`);
        await request(app)
            .delete(`/api/users/${userId}/delete`)
            .set('Authorization', `Bearer ${token}`);
    });
});
