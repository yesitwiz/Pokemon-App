//came from connection.js

const mongoose = require("../database/connection");

const PokeSchema = new mongoose.Schema (
    {
        name: String,
        img: String
    }
)

//unclear on the difference between var name and the string passed in the parameters.
//same name but they aren't connected to each other
const Poke = mongoose.model('Poke', PokeSchema)

module.exports = Poke;

//heading to create seeds.json in same folder
//after seeds.json, create seeds.js 