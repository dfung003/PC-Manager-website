const express = require('express');

const Build = require('../models/Builds');

const router = express.Router();

// INDEX

router.get('/', (req, res) => {
    Build.find({ userId: req.session.userId })
    .then((builds) => {
        res.render("builds/Index" , { builds, session: req.session })
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({ error })
    })
});

// NEW

router.get('/new', (req, res) => {
    res.render('builds/New', { session: req.session })
});

// DELETE

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Build.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/builds', { session: req.session });
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
});

// UPDATE

router.put('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Build.findById(id)
        .then((build) => {
            res.render('builds/Edit', { build, session: req.session })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
});

// SHOW

router.get('/:id', (req, res) => {
    const { id } = req.params

    Build.findById(id)
        .then((build) => {
            res.render('builds/Show', { build, session: req.session })
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error })
        })
});


module.exports = router;