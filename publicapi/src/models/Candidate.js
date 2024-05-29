const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

module.exports = mongoose.model('Candidate',CandidateSchema)