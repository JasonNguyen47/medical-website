
const path = require("path");

function login(req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'login.html'));
}

module.exports = { login };