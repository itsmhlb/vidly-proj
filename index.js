require('express-async-errors');
const error = require('./middleware/error');
const winston = require('winston');
const config = require('config');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const genres = require('./router/genres');
const customers = require('./router/customers');
const movies = require('./router/movies');
const rentals = require('./router/rentals');
const users = require('./router/users');
const auth = require('./router/auth');
//Joi.objectId = require('joi-objectid')(Joi);

//winston.add(winston.transports.File, { filename: 'logfile.log' });
const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: 'logfile.log' }),
      new winston.transports.MongoDB({ db: 'http://127.0.0.1/vidly-proj' })
    ]
  });
  
throw new Error('Something failed during startup.');

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://127.0.0.1/vidly-proj')
    .then(() => console.log('Connected to MongoDB...'))
    .catch( error => console.error('Failed to connect to MongoDB!'))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(error); //passing reference to the function

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));