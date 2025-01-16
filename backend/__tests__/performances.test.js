const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

describe('Performance API Endpoints', () => {
    // variable to eventually store the specific performance id
    let performanceID;
    //variable to store the number of performances
    let number_of_performances;

    test("Get all performances", async () => {
        const res = await request(app).get("/performances/get");

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBeInstanceOf(Array);
        number_of_performances = res.body.result.length;
    });

    test("Create new  performance", async () => {
        const res = await request(app)
            .post("/performances/create").send({
                name: "jestPerformance",
                description: "jestDescription",
                date: "1/20/2025",
                time: "5:00",
                location: "jestLocation",
            });
        performanceID = res.body.result._id;

        expect(res.statusCode).toBe(200);
        expect(res.body.result.name).toBe("jestPerformance");
        expect(res.body.result.description).toBe("jestDescription");
        const performanceDate = new Date(res.body.result.date);
        expect(res.body.result.date).toBe(performanceDate.toISOString());
        expect(res.body.result.time).toBe("5:00");
        expect(res.body.result.location).toBe("jestLocation");
    });

    test("Get all performances after creating a new performance", async () => {
        const res = await request(app).get("/performances/get");

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBeInstanceOf(Array);
        expect(res.body.result.length).toBe(number_of_performances + 1);
    });


    test("Delete the performance", async () => {
        expect(performanceID).toBeDefined();
        const res = await request(app).delete(`/performances/${performanceID}/delete`);

        expect(res.statusCode).toBe(200);
    });

    afterAll(async () => {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    });
});