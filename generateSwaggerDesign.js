const fs = require('fs');
const swaggerJsDoc = require('swagger-jsdoc');

// Define your Swagger configuration (modify this if your design spec differs)
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Table Tennis Player API Design',
      version: '1.0.0',
      description: 'Design document for the Table Tennis Player API',
    },
  },
  apis: ['./routes/*.js'], // Point this to your actual Swagger annotated files
};

const swaggerDesign = swaggerJsDoc(swaggerOptions);

// Write the Swagger design to a file named 'swaggerDesign.json'
fs.writeFile('./swaggerDesign.json', JSON.stringify(swaggerDesign, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Swagger design document generated successfully.');
});
