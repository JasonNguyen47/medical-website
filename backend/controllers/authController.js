
const path = require("path");

function login(req, res) {
    console.log("Sending to dashboard");
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'dashBoard.html'));
}

module.exports = { login };