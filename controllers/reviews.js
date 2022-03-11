const express = require('express');

const Review = require('../models/reviews');

const router = express.Router();


// INDEX

router.get('/', (req, res) => {
    Review.find({})
    .then((reviews) => {
        res.render("reviews/Index", { reviews, session: req.session })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
});

// NEW

router.get('/new', (req, res) => {
    res.render('reviews/New', { session: req.session })
});

// CREATE

router.post('/', (req, res) => {
    Review.create(req.body)
        .then((createdReview) => {
            res.redirect(`/reviews/${createdReview._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// SHOW

router.get('/:id', (req, res) => {
    const { id } = req.params

    Review.findById(id)
        .then((review) => {
            res.render('reviews/Show', { review, session: req.session })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

module.exports = router;