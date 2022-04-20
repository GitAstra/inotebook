const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route For Testing Purposes 
// router.get('/login', (req, res)=>{
//     res.send(req.body);
//     console.log(req.body);
// })



// Creating a User /api/auth
router.post('/register', (req, res)=>{
    const user = new User(req.body);
    user.save()
    res.send(req.body);
    
})


module.exports = router;