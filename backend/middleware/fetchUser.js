const jwt = require("jsonwebtoken")
require('dotenv').config();
const SECRET_KEY = process.env.SECRET
const fetchUser = (req, res, next) => {
    try{
        const token = req.header('auth-token');
        if(token == null){
            res.status(401).send({error : "Authenticate with valid token"})
        }

        const data = jwt.verify(token,SECRET_KEY);
        req.user = data.user;
        next();
    }catch(error){
        res.status(500).json({ error: "Server error 500" });
    }
}

module.exports = fetchUser;