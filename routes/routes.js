const express = require('express')

// this is the file for functions (separate later if needed):
const db = require('../db')

const router = express.Router()

// add routes here
router.get('/', (req, res) => {
    db.showHome()
    .then((results) => {
        res.render('index', results)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR')
    })
})


module.exports = router