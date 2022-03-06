const express = require("express");

const User = require('../models/user');

const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/signup', async (req, res) => {
    await bcrypt.hash(req.body.password, await bcrypt.genSalt(10), (err, hash) => {
        req.body.password = hash
        User.create(req.body, (err) => {
            if (!err) {
                res.redirect('/')
            } else {
                res.status(500).send(err)
            }
        })
    })
    
});

router.post("/login", async (req, res) => {
    // get the data from the request body
    const { username, password } = req.body;
    // search for the user
    User.findOne({ username })
      .then(async (user) => {
        // check if user exists
        if (user) {
          // compare password
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            // redirect to builds page if successful
            res.redirect("/builds");
          } else {
            // error if password doesn't match
            res.json({ error: "password doesn't match" });
          }
        } else {
          // send error if user doesn't exist
          res.json({ error: "user doesn't exist" });
        }
      })
      .catch((error) => {
        // send error as json
        console.log(error);
        res.json({ error });
      });
  });







module.exports = router;