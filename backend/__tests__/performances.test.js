const request = require("supertest");
const app = require("../server");
const pool = require("../config/db");

describe('Performance API Endpoints', () => {
    // variable to eventually store the specific performance id
    let performanceID;
    //variable to store the number of performances
    let number_of_performances;

    test("Get all performances", async () => {
        const res = await request(app).get("/api/performances/get");

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBeInstanceOf(Object);
        number_of_performances = res.body.result.rows.length;
    });

    test("Create new  performance", async () => {
        const res = await request(app)
            .post("/api/performances/create").send({
                name: "jestPerformance",
                description: "jestDescription",
                date: "1/20/2025",
                time: "5:00",
                location: "jestLocation",
            });
        performanceID = res.body.result.id;

        expect(res.statusCode).toBe(200);
        expect(res.body.result.name).toBe("jestPerformance");
        expect(res.body.result.description).toBe("jestDescription");
        const performanceDate = new Date(res.body.result.date);
        expect(res.body.result.date).toBe(performanceDate.toISOString());
        expect(res.body.result.time).toBe("05:00:00");
        expect(res.body.result.location).toBe("jestLocation");
    });

    test("Get all performances after creating a new performance", async () => {
        const res = await request(app).get("/api/performances/get");

        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBeInstanceOf(Object);
        expect(res.body.result.rows.length).toBe(number_of_performances + 1);
    });


    test("Delete the performance", async () => {
        expect(performanceID).toBeDefined();
        const res = await request(app).delete(`/api/performances/${performanceID}/delete`);

        expect(res.statusCode).toBe(200);
    });

    afterAll(async () => {
        await pool.end();
        console.log("Postgres connection closed");
    });
});