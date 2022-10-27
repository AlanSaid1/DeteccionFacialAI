//modelo vista controlador
const express = requiere('express');
const path = require('path');
const app = express();
const fileUpload = require('express-fileupload')
const modeloIARoutes = require('./routes/modeloIA')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

//prefijo para identificar los servicios que asocian a esta ruta
app.use(modeloIARoutes);


app.get('/', (req,res)=>{

    res.send('Servidor Funcional')
})

app.listen(8081,()=>{

    console.log('Servidor en linea')
})