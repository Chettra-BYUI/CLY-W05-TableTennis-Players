require('dotenv').config();  
const mongoose = require('mongoose');

// Use the MONGODB_URI  
const mongoURI = process.env.MONGODB_URI 


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
