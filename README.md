
1) instalamos swagger.ui-expreess con el siguiente comando:

# npm install swagger-ui-express

2) configuramos swagger en nuestro archivo index.js con las siguientes lineas

# const swaggerUi = require('swagger-ui-express');
# const swaggerDocument = require('./swagger.json');

# app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

3) creamos el archivo swagger.json manualmente y configurar la informacion que queremos documentar de nuestras api siguiendo con las especificaciones a pasar establecidas por la libreria swagger-ui-express 

4) iniciamos el servido y navegamos a la ruta 'http://nuestro-servidor:nuestro-puerto/api-docs/' 

(en nuestro caso nuestro link es http://localhost:4000/api-docs/)


5) instalar swagger-jsdoc

# npm i swagger-jsdoc
