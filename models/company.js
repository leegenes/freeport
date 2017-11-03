var orm = require('../lib/model.js'),
    Sqlton = orm.Sqlton();

module.exports = {

  model: {
    id: {
      type: Sqlton.UUID,
      primaryKey: true
    },

    companyName: {
      type: Sqlton.STRING(100)
    },

    companyAddLine1: {
      type: Sqlton.STRING(100)
    },

    companyAddLine2: {
      type: Sqlton.STRING(100)
    },

    companyCity: {
      type: Sqlton.STRING(100)
    },

    companyState: {
      type: Sqlton.STRING(2)
    },

    companyZip: {
      type: Sqlton.STRING(5)
    }
  }

};
