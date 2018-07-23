const express = require('express')
const router = express.Router()
const db = require('../db')


router.get('/', (req, res) => {
  db.query('SELECT * FROM movies', (err, movies) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'Database query failed'})
    }
    res.json(movies)
  })  
})

module.exports = router