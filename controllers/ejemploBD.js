const Usuario = require('../models/ejemploBD');

//definir acciones
exports.getUsuarios = async (req,res) => {
    //SELECT * FROM Usuario;
    try{
        registros = await Usuario.findAll()
        res.send (registros)
    }catch(e){
        console.log(e)
        res.send(e)
    }

}

exports.postAgregarUsuario=(req,res) => {
    console.log(req.body)
    //INSERT INTO usuario VALUES ()
    Usuario.create(req.body)
        .then(resultado=>{
            console.log("Registro Exitoso")//servidor
            res.send("Registro Exitoso")//Cliente
        })
        .catch(error => {
            console.log(error)
            res.send("Ocurrio un error")
        })
    
}