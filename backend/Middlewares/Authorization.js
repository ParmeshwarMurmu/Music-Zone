const jwt = require('jsonwebtoken')
require('dotenv').config();

const auth = (req, res, next)=>{
    const token = req.headers.authorization.split(' ')[1]
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                res.status(200).send({"message": "Authentication Failed Please Login Again"})
            }

            // console.log(decoded)
            req.body.userId = decoded.userId;
            req.body.userEmail = decoded.userEmail;
            next();
          });
    }
    else{
        
    }
   

}

module.exports = {
    auth
}