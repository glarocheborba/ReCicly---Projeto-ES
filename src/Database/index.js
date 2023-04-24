const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.production);
modulo.exports = knex;