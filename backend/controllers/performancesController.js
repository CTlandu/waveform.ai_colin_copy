// performancesController
const pool = require("../config/db");

//post <backend-server>/api/performances/create
const createPerformance = async (req, res) => {
    const client = await pool.connect();
    try{
        //destructure the body
        const { name, description, date, time, location } = req.body;

        //check if performance exists
        const performanceCheck = await pool.query(
            "SELECT * FROM performances WHERE name = $1",
            [name]
        );

        const existingPerformance = performanceCheck.rows[0];

        if (existingPerformance) return res.status(400).json({message: "a performance with same name already exists"});

        //Create the performance
        const performance = await pool.query(
            "INSERT INTO performances (name, description, date, time, location) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, description, date, time, location]
        );

        //Send the response
        res.status(200).json({result: performance.rows[0]});

    }catch(err){
        console.log(err)
        res.status(500).json({message: "Server error"});
    }finally {
        client.release();
    }
}

//get <backend-server>/api/performances/get
const getAllPerformances = async (req, res) => {
    const client = await pool.connect();
    try{
        //find all performances
        const performances = await pool.query("SELECT * FROM performances");
        res.status(200).json({result: performances});
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Server error"})
    }finally {
        client.release();
    }
}

//delete <backend-server>/api/performances/:id/delete
const deletePerformance = async (req, res) => {
    const client = await pool.connect();
    try{
        //destructure id from params
        const { id } = req.params;

        //check if id is provided
        if (!id) return res.status(400).json({message: "Performance ID not provided"});

        //find performance by id and delete
        const performance = await pool.query(
            "DELETE FROM performances WHERE id = $1 RETURNING *",
            [id]
        );

        //check if performance exists
        if (!performance) return res.status(404).json({message: "Performance does not exist"});

        //Send the response
        res.status(200).json({result: performance.rows[0], message: "Performance deleted successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server error"})
    }finally {
        client.release();
    }

}

module.exports = {createPerformance, getAllPerformances, deletePerformance }; //Export the functions