//all was brought over from server.js

const express = require('express');
const router = express.Router();

//path here needed to be updated. moved folders, needed another back dot
const Poke = require('../models/pokemon-model.js')

//detailed explanation layout below, commented out
//in browser, it needs /pokemon/pokemon to work
router.get('/pokemon', (req, res) => {
    Poke.find({})
    .then((pokemon) => {
        res.send(pokemon)
    })
    .catch(console.error)
})

//may work with the mongo id. interer returns error
//getting reason: BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
router.get('/pokemon/:id', (req, res) => {
    Poke.findById(req.params.id)
    .then((pokemon) => {
        res.render('index', pokemon)
    })
    .catch(console.error);
})

//unsure. tried in postman but received error
router.post("/", (req, res) => {
    Poke.create(req.body)
        .then((pokemon) => {
            res.redirect('/index')
        })
        .catch(conole.error)
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Poke.findOneAndUpdate(
        {_id: id},
        {
            name: req.body.name
        },
        {new: true}
    )
    .then((pokemon) => {
        res.render('index', pokemon)
    })
    .catch(console.error);
})

//still unsure about the redirect. may change that path
router.delete('/:id', (req,res) => {
    const id = req.params.id
    Poke.findOneAndRemove({_id: id})
        .then(() => {
            res.redirect('/index');
        })
        .catch(console.error)
})

//router responsible for directing user to endpoint
module.exports = router



/*
//supposed to create views beforehand, fixing now. heading to layout, then index
router.get('/pokemon', (req, res) => {
    //promise.func that take time to ex. async
    Poke.find({})
    // ((cb func) is my data. returns everything. I put label on what's returned. could label it zebra
    .then((pokes) => {
        res.render("index", {pokes})
    })
    .catch(console.error)
})
*/