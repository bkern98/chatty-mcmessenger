const knex = require('knex')
const knexfile = require('./knexfile')

// TODO: should probably use dependency injection to
// create knex instance

// TODO: knex config from env

export const db = knex(knexfile.development)
