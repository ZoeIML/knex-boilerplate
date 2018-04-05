const express = require('express')
const hbs = require('express-handlebars')

const server = express()

const routes = require('./routes/routes')

// Middleware
server.engine('hbs', hbs ({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.use(express.static('public'))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes:
server.use('/', routes)

module.exports = server