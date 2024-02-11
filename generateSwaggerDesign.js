const fs = require('fs');
const swaggerJsDoc = require('swagger-jsdoc');

// Swagger configuration  
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Table Tennis Player API Design',
      version: '1.0.0',
      description: 'Design document for the Table Tennis Player API',
    },
  },
  apis: ['./routes/playerRoutes.js'],  // has annotation
};

const swaggerDesign = swaggerJsDoc(swaggerOptions);

// Write 'swaggerDesign.json'
fs.writeFile('./swaggerDesign.json', JSON.stringify(swaggerDesign, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Swagger design document generated successfully.');
});
