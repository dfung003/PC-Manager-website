// NOTE: npm run dev to start nodemon

/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

require("dotenv").config(); // Load environment variables
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan debugger
const UserRouter = require("./controllers/user");
const BuildRouter = require("./controllers/builds")
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const Build = require('./models/builds');
const Review = require('./models/reviews');
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
// Models (moved to models folder)
/////////////////////////////////////////////


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

// middleware to setup session
app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
      saveUninitialized: true,
      resave: false,
    })
);

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render("Home")
});

app.get('/motherboards', (req, res) => {
    res.render("browse/Motherboards")
});

app.get('/cpu', (req, res) => {
    res.render("browse/Cpu")
});

app.get('/gpu', (req, res) => {
    res.render("browse/Gpu")
});

// INDEX

app.get('/reviews', (req, res) => {
    Review.find({})
    .then((reviews) => {
        res.render("reviews/Index", { reviews })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
});

// NEW

app.get('/reviews/new', (req, res) => {
    res.render('reviews/New')
});

// CREATE

app.post('/reviews', (req, res) => {
    Review.create(req.body)
        .then((createdReview) => {
            res.redirect(`/reviews/${createdReview._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// SHOW

app.get('/reviews/:id', (req, res) => {
    const { id } = req.params

    Review.findById(id)
        .then((review) => {
            res.render('reviews/Show', { review })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

/////////////////

app.use("/user", UserRouter); // send all "/user" routes to user router

app.use("/builds", BuildRouter);  // send all "/builds" routes to build router



//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on Port ${PORT}.`));