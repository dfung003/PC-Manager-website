// NOTE: npm run dev to start nodemon

/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

require("dotenv").config(); // Load environment variables
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan debugger
const UserRouter = require("./controllers/user");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish Connection

mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors

mongoose.connection
    .on("open", () => console.log("Connected to MongoDB."))
    .on("close", () => console.log("You have disconnected from Mongo."))
    .on("error", (error) => console.log(error));

/////////////////////////////////////////////
// Models
/////////////////////////////////////////////

// pull schema and model from mongoose using object destructuring



// User model



/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////

app.use(morgan("tiny")); // logging
app.use(express.urlencoded({extended: true})); // override for put and delete requests
app.use(methodOverride("_method")); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

app.use(express.json());

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send("Your server is currently running.")
});

app.use("/user", UserRouter); // send all "/user" routes to user router
//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on Port ${PORT}.`));