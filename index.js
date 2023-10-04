const mongoose = require('mongoose')
const express = require('express');
const app = express();
const genres = require('./router/genre');
const customers = require('./router/customer');

mongoose.connect('mongodb://127.0.0.1/vidly-proj')
    .then(() => console.log('Connected to MongoDB...'))
    .catch( error => console.error('Failed to connect to MongoDB!'))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));