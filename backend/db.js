const mongoose = require('mongoose');


const connectToMongo = ()=>{
    mongoose.connect('mongodb://localhost:27017/inotebook', ()=>{
        console.log('Connected To MongoDB')
    })
}




module.exports = connectToMongo;