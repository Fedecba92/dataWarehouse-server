const express = require('express');
const cors = require('cors');

const {connection} = require('./db/config');
 require('./models');

//creamos un servidor express
const app = express();

//para la lectura y el parseo del body
app.use( express.json() );

//directorio público
app.use( express.static('public') );

//cors
app.use( cors() );

//inicializando la ruta raiz
app.use( '/api/auth', require('./routes/auth.route') );
app.use( '/api/countries', require('./routes/countries.route') );

app.listen( 3000, () => {
    console.log(`Servidor corriendo en el puerto ${ 3000 }`);

    connection.sync({force:false}).then(()=>{
        console.log('Se ha establecido la conexión con la base de datos');
    }).catch((err)=> console.log('Error', err));
})






/*

localhost:3000/api/auth/new

{   

    "name":"Juan Carlos",
    "email":"Juancarlos@comoestas.com",
    "password":"123456"
}

*/