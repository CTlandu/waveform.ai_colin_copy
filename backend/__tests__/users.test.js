const request = require("supertest");
const app = require("../server");

describe('User API Endpoints', () => {
    //variable to eventually save the user id
    let userID;

    test("create a new user", async () => {
        const res = await request(app)
            .post("/api/users/register").send({
                username: "jestTest",
                email: "jest@email.com",
                password: "jestPassword",
            }); 
    
        expect(res.statusCode).toBe(200);
        userID = res.body.result.id;
    });


    test("login a user", async () => {
        const res = await request(app)
            .post("/api/users/login").send({
                email: "jest@email.com",
                password: "jestPassword",
            });

        expect(res.statusCode).toBe(200);
    });

    //update user and check if the user was updated
    test("update a user", async () => {
        expect(userID).toBeDefined();
        const res = await request(app)
            .patch(`/api/users/${userID}/update`).send({
                username: "jestTestUpdated",
            });
            
        expect(res.statusCode).toBe(200);
        expect(res.body.result.username).toBe("jestTestUpdated");
    });

    //reset password
    test("reset password", async () => {
        expect(userID).toBeDefined();
        const res = await request(app)
            .patch(`/api/users/${userID}/update_password`).send({
                old_password: "jestPassword",
                new_password: "jestPasswordUpdated",
            });

        expect(res.statusCode).toBe(200);
    });


    //login with new password
    test("login with new password", async () => {
        const res = await request(app)
            .post("/api/users/login").send({
                email: "jest@email.com",
                password: "jestPasswordUpdated",
            });

        expect(res.statusCode).toBe(200);
    });

    //destroy process
    //delete the test user after all tests have run
    test("Delete user", async () => {
        expect(userID).toBeDefined();
        const res = await request(app).delete(`/api/users/${userID}/delete`);

        expect(res.statusCode).toBe(200);
    });


});
