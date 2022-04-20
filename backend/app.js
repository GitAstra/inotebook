const express = require('express');

const app = express();

const mongoose = require('mongoose');


const connectToMongo = require('./db');

connectToMongo();

app.listen(5000)

app.use(express.json());


app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res)=>{
    res.send('Local Server Up And Running')
})