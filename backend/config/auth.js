/*
Auth configuration
*/

const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try{
        //Get token from header
        const token = req.header("Authorization")?.replace("Bearer ", "");

        if (!token) return res.status(401).json({message: "No AUTH token"});

        //Verify token
        const decoded = jwt.verify(token, "test");

        req.user = decoded;

        next();
    }catch(err){
        console.error(err);
        res.status(401).json({message: "Invalid Token"});
    }
}

module.exports = auth; // Export the function