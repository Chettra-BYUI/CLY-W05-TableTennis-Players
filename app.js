const express = require('express');
require('dotenv').config();
require('./db/mongo'); // Connect to MongoDB
const cors = require('cors'); // Import cors

const app = express();
const port = process.env.PORT || 3000;

//  Parsing JSON and handling CORS
app.use(express.json());

 
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Z-Key']
}));
 

// Import routes
const playerRoutes = require('./routes/playerRoutes');

// Use routes
app.use('/api/players', playerRoutes);

// Swagger setup
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Table Tennis Player API',
      version: '1.0.0',
      description: 'API for managing table tennis player profiles',
    },
  },
  apis: ['./routes/playerRoutes.js'],  
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
