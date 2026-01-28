

const express = require("express");
const app = express();
const PORT = 3000; 
const path = require('path'); 
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok "});
})

app.get("/", (req, res) => {
    res.json({ message: "All Good"});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/web-page", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "webpage.html"));
})
app.get("/homePage", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "homePage.html"));
})
app.get("/loginPage", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "loginPage.html"));
})


app.post("/login", (req, res) => {
    console.log(req.body.passWord);
    res.send(`ok: ${req.body}`);
})


