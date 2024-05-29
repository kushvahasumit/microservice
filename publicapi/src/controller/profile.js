const Candidate = require('../models/Candidate');

exports.profile = async (req,res) =>{
  const user = req.user;
  console.log(user)
  res.json({
    id:user._id,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email,
  });
};

exports.candidate = async (req,res) => {
   const user = req.user;
   console.log("this is a user:",user)
    const candidates = await Candidate.find({userID:user._id});
    console.log("This is get candidate by API:",candidates)
    res.json(candidates);
}