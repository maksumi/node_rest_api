//Para la creación de nuestro servidor empezamos por la instalación de express en nuestro entorno de trabajo y lo importamos a nuestro archivo principal de Js.
//Para poder importar dependencias con sintaxis moderna hay que configurar el valor '"type": "true"' en el package.json
//Para poder ejecutar el servidor de forma automatica al estar realizando cambios en el será necesario agregar la dependencia 'nodemon' en el entorno de desarrollo. Una vez instalado habrá que configurar el script '"dev": "nodemon index.js"'. Esto nos permitira actualizar cambios en el servidor en tiempo real sin estar reiniciando de forma manual cada vez que existan los cambios.
import express  from 'express';





const app = express();

app.listen(3000);
console.log('Server runing on port 3000');