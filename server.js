let express = require('express');
let app = express();

let port = 8080;

app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

const server = app.listen(port);
console.log("Listening on port " + port);

module.exports = server; // for testing
