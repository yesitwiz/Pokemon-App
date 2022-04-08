//all was brought over from server.js

const express = require('express');
const router = express.Router();

//path here needed to be updated. moved folders, needed another back dot
const Poke = require('../models/pokemon-model.js')


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

router.get('/pokemon/:id', (req, res) => {
    Poke.findById(req.params.id)
    .then((pokes) => {
        res.render('index', pokes)
    })
    .catch(console.error);
})
//router responsible for directing user to endpoint
module.exports = router