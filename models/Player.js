const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: String,
  state: String,
  clubAffiliation: String,
  paddleTypes: [String],
  daysAvailable: [String],
  preference: { type: String, enum: ['morning', 'evening'] },
  aboutMe: String,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Player', playerSchema);
