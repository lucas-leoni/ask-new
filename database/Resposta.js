const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('resposta', {
  idPergunta: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  respostaCorpo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Resposta.sync({ force: false }).then(() => {});
module.exports = Resposta;