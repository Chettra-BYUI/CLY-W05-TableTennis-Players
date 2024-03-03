const express = require('express');
require('dotenv').config();
require('./db/mongo'); // Connect to MongoDB
const cors = require('cors'); // Import cors

const app = express();
const port = process.env.PORT || 3000;

// Auth0 setup
const { auth, requiresAuth } = require('express-openid-connect');
const authConfig = {
  authRequired: false,   
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

// Use Auth0 authentication
app.use(auth(authConfig));

// Parsing JSON and handling CORS
app.use(express.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Z-Key']
}));

// Import routes
const playerRoutes = require('./routes/playerRoutes');
const clubRoutes = require('./routes/clubRoutes');  

playerRoutes.use(requiresAuth());
clubRoutes.use(requiresAuth());

app.use('/api/players', playerRoutes);
app.use('/api/clubs', clubRoutes);

// Swagger setup
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Table Tennis Community API',
      version: '1.0.0',
      description: 'API for managing table tennis player profiles and clubs',
    },
  },
  apis: ['./routes/*.js'],  
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
