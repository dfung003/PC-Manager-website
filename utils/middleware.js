require("dotenv").config(); // Load environment variables
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan debugger
const UserRouter = require("../controllers/user");
const BuildRouter = require("../controllers/builds");
const ReviewRouter = require("../controllers/reviews");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////

const middleware = (app) => {
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
};

module.exports = middleware;