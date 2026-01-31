const express = require('express');
const path = require('path');
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);

const PORT = 3000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

