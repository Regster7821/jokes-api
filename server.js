const express = require("express");
const app = express();
const mongoose = require('mongoose');

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

const AllMyJokeRoutes = require('./server/routes/jokes.routes');
AllMyJokeRoutes(app);

app.listen(9100, () => console.log("The server is all fired up on port 9100"));
