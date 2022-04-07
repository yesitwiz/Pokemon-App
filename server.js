//start here
const express = require('express')
const app = express()

//route controllers
const Poke = require('./models/pokemon-model')



app.get('/pokemon', (req, res) => {
    Poke.find({})
    .then((test) => {
        res.render("test")
    })
    // .then((pokemon) => {
    //     res.render('p')
    // })
})

app.listen(3050, () => {
    console.log(`Pokemon app is running on port 3050`);
  });

//continue to connection.js