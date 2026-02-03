const jwt = require("jsonwebtoken");

function readInput(req, res, next) {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    console.log(`User Name: ${userName}`);
    console.log(`Password: ${passWord}`);
    next(); 
}

function authenticateUser(req, res, next){
    const token = req.cookies.token;

    if (!token) {
        return res.sendStatus(401).json({ error: "No Token Provided"});
    }

    try {
        const decoded = jwt.verify(token, process.env.jwtKey);
        req.user = decoded;
        console.log(req.user)
        next();
    } catch (err) {
        return res.status(403).json({ message: "Token has been changed"});
    }

}


module.exports = { readInput, authenticateUser }