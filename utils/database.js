const Sequelize = require('sequelize');
//objeto de conexion

const sequelize = new Sequelize('semanatec', 'admin', 'R6Always.xdd', {
    dialect:'mysql',
    host:'database-1.cifiweqvqpbg.us-east-1.rds.amazonaws.com',
    define:{
        timestamps:false,
        freezeTableName:true
    }
})

module.exports = sequelize;