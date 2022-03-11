// NOTE: npm run dev to start nodemon

/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////

const express = require("express"); // import express
const UserRouter = require("./controllers/user");
const BuildRouter = require("./controllers/builds");
const ReviewRouter = require("./controllers/reviews");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
const middleware = require("./utils/middleware");

/////////////////////////////////////////////
// Database Connection (moved to models folder)
/////////////////////////////////////////////


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
// Middleware (moved to utils/middleware.js)
/////////////////////////////////////////////////////

middleware(app);

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render("Home", {session: req.session})
});

app.get('/motherboards', (req, res) => {
    res.render("browse/Motherboards", { session: req.session })
});

app.get('/cpu', (req, res) => {
    res.render("browse/Cpu", { session: req.session })
});

app.get('/gpu', (req, res) => {
    res.render("browse/Gpu", { session: req.session })
});

/////////////////

app.use("/user", UserRouter); // send all "/user" routes to user router

app.use("/builds", BuildRouter);  // send all "/builds" routes to build router

app.use("/reviews", ReviewRouter); // send all "/reviews" routes to review router



//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on Port ${PORT}.`));