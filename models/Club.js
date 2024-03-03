const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  city: String,
  state: String,
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
}, { collection: 'clubs' });  

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;
