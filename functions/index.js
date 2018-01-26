'use strict';

const app = require('./app')
const config = require('./config')
var admin = require('firebase-admin');

var serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});



app.listen(config.port, function () {
  // Puerto en el que está corriendo la aplicación
  console.log(`Aplicación corriendo en http://localhost:${config.port}`)
  console.log(`Base de datos corriendo en ${config.dataBase}`)
  console.log(`Propiedad de ${config.owner}`)
  console.log(`Desarrollado por ${config.developer}`)
})
