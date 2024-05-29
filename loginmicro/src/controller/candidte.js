
const Candidate = require('../model/Candidate')

exports.addCandidate = async (req,res)=>{
    const {firstname, lastname, email} = req.body;
    const userID = req.user.id;

    try {
        let candidate = await Candidate.findOne({email});
        if (candidate){return res.status(400).json({ message: "Candidate already exists!" });}

        let newCandidate = new Candidate({ firstname, lastname, email, userID });
        await newCandidate.save();
        console.log(newCandidate);

        res.json(newCandidate);
    } catch (error) {
        console.error("catch error in addCandidate :", error.message);
        res.status(500).send("Get some server error");
    }
}

exports.getAllCandidate = async (req,res)=>{
    const userID = req.user.id;

    try {
        const candidates = await Candidate.find({userID});
        res.json(candidates);
    } catch (error) {
        console.error("catch error in getAllCandidate :", error.message);
        res.status(500).send("Get some server error");
    }
}