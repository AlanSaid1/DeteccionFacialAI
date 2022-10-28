const path = require('path');
const TeachableMachine = require('@sashido/teachablemachine-node')

const model = new TeachableMachine({
    modelUrl: "https://teachablemachine.withgoogle.com/models/6LA1onI0w/"
})

exports.getFormularioImagen = (req,res) =>{
    //dirname -> nos dice exactamente la ruta
    res.sendFile(path.join(__dirname,'..', 'views', 'formularioImagen.html'))
}

exports.postUpload = async(req,res)=>{
    const {image} = req.files
    if (!image) return res.send('Error al enviar imagen')
    await image.mv(path.join(__dirname, '..', 'public', 'image', image.name));

    model.classify({
        imageUrl:"http://localhost:8081/image/"+image.name
    }).then((prediccion)=>{
        res.send(prediccion)
    }).catch((e) => res.send(e))

}