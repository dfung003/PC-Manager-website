// NOTE: npm run dev to start nodemon

/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

require("dotenv").config(); // Load environment variables
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan debugger
const UserRouter = require("./controllers/user");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const Build = require('./models/builds');
const mongoose = require("mongoose");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
const router = require("./controllers/user");

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

// INDEX

app.get('/builds', (req, res) => {
    Build.find({ userId: req.session.userId })
    .then((builds) => {
        res.render("builds/Index" , { builds })
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({ error })
    })
});

// NEW

app.get('/builds/new', (req, res) => {
    res.render('builds/New')
});

// DELETE

app.delete('/builds/:id', (req, res) => {
    const { id } = req.params;
    Build.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/builds');
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
});

// UPDATE

app.put('/builds/:id', (req, res) => {
    const { id } = req.params;
    req.body.upToDate = req.body.upToDate === 'on' ? true: false;

    Build.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/builds/${id}`);
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
});

// CREATE

app.post('/builds', (req, res) => {
    if(req.body.upToDate === 'on'){
        req.body.upToDate = true
    } else {
        req.body.upToDate = false
    }
    req.body.userId = req.session.userId

    Build.create(req.body)
        .then((createdBuild) => {
            res.redirect(`/builds/${createdBuild._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// EDIT

app.get('/builds/:id/edit', (req, res) => {
    const { id } = req.params
    Build.findById(id)
        .then((build) => {
            res.render('builds/Edit', { build })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// SHOW

app.get('/builds/:id', (req, res) => {
    const { id } = req.params

    Build.findById(id)
        .then((build) => {
            res.render('builds/Show', { build })
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error })
        })
});

app.use("/user", UserRouter); // send all "/user" routes to user router

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on Port ${PORT}.`));