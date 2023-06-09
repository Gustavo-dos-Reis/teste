const Sequelize = require('sequelize')
// Conexão com o banco de dados MySql
const sequelize = new Sequelize ('postapp', 'root', '123456',{
    dialect:'mysql',
    host: 'localhost',
    query:{raw:true}
})

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}