const environment = process.env.NODE.ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    showHome
}

function showHome () {
    const conn = connection
    return conn('initial').select()
}