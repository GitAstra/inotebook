const express = require('express');

const app = express();

const mongoose = require('mongoose');


const connectToMongo = require('./db');

connectToMongo();

app.listen(5000)

app.get('/', (req, res)=>{
    res.send('Local Server Up And Running')
})