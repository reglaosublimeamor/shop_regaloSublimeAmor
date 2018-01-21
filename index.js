const app = require('./app')
const config = require('./config')

app.listen(config.port, function () {
  // Puerto en el que está corriendo la aplicación
  console.log(`Aplicación corriendo en http://localhost:${config.port}`)
  console.log(`Propiedad de ${config.owner}`)
  console.log(`Desarrollado por ${config.developer}`)
})
