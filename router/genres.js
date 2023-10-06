const auth = require("../middleware/auth");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Genre, validateGenre } = require('../models/genre')


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
    
});

router.post('/', auth, async (req, res) => {

    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();
    res.send(genre);
});

router.put('/:id', async (req, res) => {

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name},{
        new: true
    });

    if(!genre) res.status(404).send('The genre with the given id was not found.');

    res.send(genre);
});

router.delete('/:id', async (req, res) => {

    const genre = await Genre.findByIdAndUpdate(req.params.id);

    if(!genre) res.status(404).send('The genre with the given id was not found.');
    
    res.send(genre);
});

router.get('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndUpdate(req.params.id);
  
    if(!genre) res.status(404).send('The genre with the given id was not found.');

    res.send(genre);
});

module.exports = router;