const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    const token = req.header('auth-token');
    if(!token){ return res.status(400).json({message:"Missing token!"});}

    try {
        const decodeToken = jwt.verify(token, process.env.SEC_JWT);
        req.user = decodeToken.user;
        console.log(decodeToken);
        
        next();
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ message: "Invalid Token" });
    }
}