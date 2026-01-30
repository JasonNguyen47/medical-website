const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, `..`, "frontend", "pages","home.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, `..`, "frontend", "pages","login.html"));
})


app.get('/DashBoard', (req, res) => {
    res.sendFile(path.join(__dirname, `..`, "frontend", "pages","dashBoard.html"));
})