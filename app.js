const express = require('express');
require('dotenv').config(); // If using dotenv for environment variables
require('./db/mongo'); // Connect to MongoDB

const app = express();
const port = process.env.PORT || 3000;

// Body-parser middleware is now built into Express
app.use(express.json());

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
    openapi: '3.0.0', // Updated to use OpenAPI 3.0
    info: {
      title: 'Table Tennis Player API',
      version: '1.0.0',
      description: 'API for managing table tennis player profiles',
    },
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
