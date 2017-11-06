var orm = require('../lib/model.js');

exports.employee = function (request, response) {
  var Employee = orm.model("employee");
}

exports.company = function (request, response) {
  var Company = orm.model("company");
}
