//start here
const express = require('express')
const app = express()
const pokemonController = require('./controllers/pokemonController.js')
const methodOverride = require('method-override')


//also in controller
// const Poke = require('./models/pokemon-model.js')

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use("/pokemon", pokemonController);

// app.get('/', (req, res) => {
//     res.send("hello server")
// })

//route controllers. heading to make controllers folder. Poke var is moving

/*
from here ...

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
...to here. Will be transported to pokemonController.js. no longer needed here
*/

app.listen(3050, () => {
    console.log(`Pokemon app is running on port 3050`);
  });

//continue to connection.js