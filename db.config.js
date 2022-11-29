
const Sequelize = require("sequelize");
const dbName = 'frontofficeusers';
const dbUser = 'root';
const password = '1234';


const sequelize = new Sequelize(dbName, dbUser, password, {
    host: "localhost",
    Port: 3306,
    dialect: "mysql"

})

const database = {}

database.Sequelize = Sequelize
database.sequelize = sequelize;
// MODEL OF FRONTOFFICETABLE//////
database.frontofficeuser = require('./Frontofficeuser.model')(Sequelize , sequelize);



module.exports = database;