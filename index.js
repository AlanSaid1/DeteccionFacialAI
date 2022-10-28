//modelo vista controlador
const express = require('express');
const path = require('path');
const app = express();
const fileUpload = require('express-fileupload')
const modeloIARoutes = require('./routes/modeloIA')
const ejemploBDRoutes = require('./routes/ejemploBD')
const sequelize = require('./utils/database')
const cors = require('cors')


//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

//prefijo para identificar los servicios que asocian a esta ruta
app.use(modeloIARoutes);
app.use('/usuario', ejemploBDRoutes);


app.get('/', (req,res)=>{

    res.send('Servidor Funcional')
})

sequelize.sync()
    .then (resultado=>{
        console.log("Conexion Exitosa")
        app.listen(8081, ()=> {
            console.log("Servidor en linea")
        })
    })
    .catch(error=>console.log(error))