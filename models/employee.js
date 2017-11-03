var orm = require('../lib/model.js'),
    Sqlton = orm.Sqlton();

module.exports = {
  
  model: {
    id: {
      type: Sqlton.STRING(4),
      allowNull: false,
      primaryKey: true
    },

    eeFirstName: {
      type: Sqlton.STRING(100),
      allowNull: false
    },

    eeMiddleName: {
      type: Sqlton.STRING(100),
    },

    eeLastName: {
      type: Sqlton.STRING(100),
      allowNull: false
    },

    // TODO: determine if tax ID need own table
    eeTin: {
      type: Sqlton.STRING(50),
    },

    // TODO: determine if employee info table should exist for this
    // and columns below
    eeBirthdate: {
      type: Sqlton.DATEONLY
    },

    eeAddLine1: {
      type: Sqlton.STRING(100)
    },

    eeAddLine2: {
      type: Sqlton.STRING(100)
    },

    eeCity: {
      type: Sqlton.STRING(75)
    },

    eeState: {
      type: Sqlton.STRING(2)
    },

    eeZipCode: {
      type: Sqlton.STRING(5)
    }
  }
};
