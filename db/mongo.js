require('dotenv').config(); // This line ensures that environment variables from the .env file are loaded
const mongoose = require('mongoose');

// Use the MONGODB_URI from the .env file
const mongoURI = process.env.MONGODB_URI 


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
