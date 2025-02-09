const express = require('express');

// Instance of the express for configuration

const app = express();

// define a default port number
const PORT = 3300;

// Our URL: localhost:PORTNUMBER/url_name
app.get("/", (req, res) => {
    // Function logic executed
    // res.send("<h1>Hello from express backend</h1>");
    // res.sendStatus(201);
    res.status(500).send("<h1>Hello from express backend</h1>");
    // res.download("./src/index.js");
});

app.get("/users", (req, res) => {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

app.post("/", (req, res) => {
    // Function logic executed
    res.json({
        message: "POST Request made!"
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
