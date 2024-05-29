const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  apiKey: { type: String, default: uuidv4 },
});

module.exports = mongoose.model('user',UserSchema);