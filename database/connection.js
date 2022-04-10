//came here after index.js. created database folder

const mongoose = require('mongoose');

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : "mongodb+srv://GriselleR:test@cluster0.9iave.mongodb.net/pokemonApp?retryWrites=true&w=majority"

mongoose
.connect(mongoURI, 
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  }
  )
.then((instance) => 
    console.log(`Connected to connection.js ${instance.connections[0].name}`))
.catch((error) => console.log('Connection failed', error));

module.exports = mongoose

//will now create schema in newly created models  under pokemone-model.js