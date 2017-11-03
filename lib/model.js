var fs = require('fs'),
    models = {},
    relationships = {},
    Sequelize = require('sequelize'),
    path = require('path');

var sqlton = function sqlton() {
  var sequelize = null;
  var modelsPath = "";
  this.setup = function (path, db, username, pass, obj) {
    modelsPath = path;

    if (arguments.length == 3) {
      sequelize = new Sequelize(db, username);
    } else if (arguments.length == 4) {
      sequelize = new Sequelize(db, username, pass);
    } else if (arguments.length == 5) {
      sequelize = new Sequelize(db, username, pass, obj);
    }
    init();
  }

  this.model = function(name) {
    return models[name];
  }

  this.Sqlton = function() {
    return Sequelize;
  }

  function init() {
    fs.readdirSync(modelsPath).forEach(function(name) {
      var modelPath = path.join(modelsPath, name);
      var object = require(modelPath);
      var options = object.options || {};
      var modelName = path.basename(modelPath, '.js');
      models[modelName] = sequelize.define(modelName, object.model, options);
      if("relations" in object) {
        relationships.modelName = object.relations;
      }
    });

    for (var relName in relationships) {
      var relation = relationships[name];
      for (var relName in relation) {
        var related = relation[relName];
        models[name][relName](models[related]);
      }
    }
  }
  if (sqlton.caller != sqlton.getInstance) {
    throw new Error("Object not available");
  }
}

sqlton.instance = null;

sqlton.getInstance = function() {
  if (this.instance === null) {
    this.instance = new sqlton();
  }
  return this.instance;
}

module.exports = sqlton.getInstance();
