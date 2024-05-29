const User = require('../models/User');

module.exports = async (req, res, next) => {
  const apiKey = req.header("auth-api");
  if (!apiKey) {
    return res.status(400).json({ message: "Missing API!" });
  }
  const user = await User.findOne({apiKey:apiKey});

  if (!user) {
    return res.status(400).json({message:"Invalid API"})
  }
    req.user = user;

    next();
  
};
