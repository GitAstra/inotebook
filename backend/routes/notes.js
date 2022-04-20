const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send("Notes Home Endpoint")
})

module.exports = router