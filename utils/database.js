const Sequelize = require('sequelize');
//objeto de conexion

const sequelize = new Sequelize('semanatec', 'admin', '', {
    dialect:'mysql',
    host:'',
    define:{
        timestamps:false,
        freezeTableName:true
    }
})

module.exports = sequelize;