//came here from seeds.json

const Poke = require('../models/pokemon-model');
const seedData = require('./pokemon-seeds.json');

//removing preexisting data as precaution. not sure if this is standard
Poke.deleteMany({})
    .then(() => {
        return Poke.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    });