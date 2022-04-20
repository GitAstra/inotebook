const jwt = require('jsonwebtoken');

const JWT_SECRET = 'A Long Random String';


function fetchUser(req, res, next){
    // Getting User From JWT Token 
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate with a valid token'})
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;   
        next()
    }
    catch(err){
        res.status(401).send({error: 'Please authenticate with a valid token'})

    }
    
}

module.exports = fetchUser;