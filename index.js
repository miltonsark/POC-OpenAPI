const express = require('express')
const puerto = 4000;
const app = express();

// IMPORTACION DE swagger-ui-express
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');

// agrgando el middleware de Swagger-ui-express
// Initialize swagger-jsdoc -> returns validated swagger spec in json format


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




// const options = {
//     definition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'Probando Swagger',
//         version: '1.0.0',
//       },
//     },
//     apis: ['./src/routes.js'], 
//   };
  
// const openapiSpec = swaggerJsdoc(options);
// const swaggerDocs = (app, port) => {
//     app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.docs,)
// } 






app.use(express.json());


app.put('/change-user', (req, res) => {
    res.send('cambiar suario')
})

app.delete('/delete-user', (req, res) => {
    res.send('eliminar suario')
})

app.get('/', (req, res) => {
    res.send('hola')
})

app.post('/new-user', (req, res) => {
    res.send('nuevo suario')
})


app.listen(puerto, () => {
    console.log(`escuchando en el puerto: ${puerto}`)
})
