//all was brought over from index.js

const express = require('express');
const router = express.Router();

//path here needed to be updated. moved folders, needed another back dot
const Poke = require('../models/pokemon-model.js')

router.get('/', (req, res) => {
    Poke.find({})
    .then((pokemon) => {
        res.render('submission/index', {pokemon})
    })
    .catch(console.error)
})

router.get('/new', (req, res) => {
   res.render ('submission/new')
})

//may work with the mongo id. interer returns error
//getting reason: BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
router.get('/:id', (req, res) => {
    Poke.findById(req.params.id)
    .then((pokemon => {
        res.render('submission/index', {pokemon});
    }))
    .catch(console.error)
})

router.get('/:id/edit', (req, res) =>{
    const id = req.params.id;
    Poke.findById(id)
    .then((pokemon => {
        res.render('submission/edit', {pokemon})
    }))
    .catch(console.error)
})



//unsure. tried in postman but received error
router.post("/", (req, res) => {
    Poke.create(req.body)
        .then(() => {
            res.redirect('/pokemon')
        })
        .catch(console.error)
})


router.put('/:id', (req, res) => {
   
        Poke.findByIdAndUpdate(req.params.id, 
        {
            name: req.body.name,
            img: req.body.img
        },
        {new: true}
    )
    .then(() => {
     res.redirect('/pokemon')
    })
    .catch(console.error);
})



//still unsure about the redirect. may change that path
// * inserts registered. how to delete?
router.delete('/:id', (req,res) => {
    const id = req.params.id
    Poke.findOneAndRemove({_id: id})
        .then(() => {
            res.redirect('/pokemon');
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