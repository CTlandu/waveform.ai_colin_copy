//Test the authentication
const request = require("supertest");
const app = require("../server");
const pool = require("../config/db");

describe('Authentication Endpoints', () => {
    let token;
    let userId;

    beforeAll(async () => {
        // Create test user
        const registerRes = await request(app)
            .post("/api/users/register")
            .send({
                username: "authtest",
                email: "authtest@test.com",
                password: "testpass123"
            });
        
        token = registerRes.body.token;
        userId = registerRes.body.result.id;
    });

    test("Protected route should fail without token", async () => {
        const res = await request(app)
            .post("/api/events/create")
            .send({
                name: "Protected Event",
                description: "Test Description",
                date: "2025-01-15",
                time: "12:00",
                location: "Test Location",
                registration_deadline: "2025-01-14"
            });

        expect(res.statusCode).toBe(401);
    });

    test("Protected route should work with valid token", async () => {
        const res = await request(app)
            .post("/api/events/create")
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: "Protected Event",
                description: "Test Description",
                date: "2025-01-15",
                time: "12:00",
                location: "Test Location",
                registration_deadline: "2025-01-14"
            });

        expect(res.statusCode).toBe(200);
    });

    afterAll(async () => {
        // Clean up test user
        await request(app)
            .delete(`/api/users/${userId}/delete`)
            .set('Authorization', `Bearer ${token}`);
    });
});