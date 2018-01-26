'use strict';

const app = require('./app')
const config = require('./config')
const db = require('./db')



app.listen(config.port, function () {
  // Puerto en el que está corriendo la aplicación
  console.log(`Aplicación corriendo en http://localhost:${config.port}`)
  console.log(`Base de datos corriendo en ${config.dataBase}`)
  console.log(`Propiedad de ${config.owner}`)
  console.log(`Desarrollado por ${config.developer}`)
})
