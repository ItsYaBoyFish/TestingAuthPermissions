const Sequelize = require('sequelize');
const db = require('../connection.js');

var Users = db.define('Users', {
  
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  
  UUID: {
    type: Sequelize.STRING,
    allowNull: true
  },

  date_created: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Users.sync();

module.exports = Users;