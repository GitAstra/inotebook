const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');
const { json } = require('express');

const bcrypt = require('bcryptjs');

const JWT = require('jsonwebtoken');
const JWT_SECRET = 'A Long Random String';

// Route For Testing Purposes 
// router.get('/login', (req, res)=>{
//     res.send(req.body);
//     console.log(req.body);
// })



// Creating a User /api/auth
router.post('/register', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('password', 'Password Must be atleast 5 chars').isLength({min: 5})
] ,async(req, res)=>{


        // Handling Errors
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(400).json({errors: errors.array()})
       }
       // Handling Errors

       try{
        let user = await User.findOne({email: req.body.email});
        if(user){
           return res.status(400).json({error: "A user With that email already Exists"});
       }

       const salt = await bcrypt.genSalt(10);
       hashedPass = await bcrypt.hash(req.body.password, salt);

       user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPass
      })
      const data = {
          user:{
              id: user.id
          }
      }
      const authToken = JWT.sign(data, JWT_SECRET);
      res.json({authToken: authToken});

    }
    catch{
        res.status(500).send("Some Error Occured")
    }
})




router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password Must be atleast 5 chars').isLength({min: 5})
], async(req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }


    const {email, password} = req.body;


    try{
        let user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({error: "Check Your Email, Password"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error: "Check Your Email, Password"})
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = JWT.sign(data, JWT_SECRET);
        res.json({authToken: authToken});


    }   
    catch(error){
        res.status(500).send("Some Error Occured");
    }

})


module.exports = router;