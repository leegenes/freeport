var orm = require('../lib/model.js');

exports.employee = function (request, response) {
  var Employee = orm.model("employee");
}

exports.company = function (request, response) {
  var Company = orm.model("company");
}


// var fs = require('fs');
// var path = require('path');
// var sqlite = require('sqlite3');
// var Sequelize = require('sequelize');
//
// var dbFile = path.join(__dirname, "../db.dev.sqlcipher");
//
//
// var sqlitedb = new sqlite.Database(dbFile, (err) => {
//   if (err) {
//     console.log(err.message);
//   }
// });
//
// sqlitedb.serialize(function() {
//   sqlitedb.run("PRAGMA KEY = 'secret'")
//     .run("PRAGMA CIPHER = 'aes-128-cbc'");
// });
// sqlitedb.close()
//
// db = {};

// var env = "dev";
// var config = path.join(__dirname, "..", "config.json")[env];
// var sequelize = new Sequelize(dbFile, 'secret', 'aes-128-cbc', {dialect: "sqlite", storage: "./db.dev.sqlcipher"});
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
//
// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf(".") !== 0) && (file !== "index.js");
//   })
//   .forEach(function(file) {
//     var model = sequelize.import(path.join(__dirname, file))
//     db[model.name] = model;
// });
//
// Object.keys(db).forEach(function(modelName) {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });
//
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
//
// module.exports = db;
