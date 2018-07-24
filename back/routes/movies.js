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

router.post('/', (req, res) => {
  const {title, year, picture} = req.body
  const query = 'INSERT INTO movies (title, year, picture) VALUES (?, ?, ?)'
  const selectQuery = 'SELECT * from movies WHERE id = ?'
  db.query(query, [title, year, picture], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'Database query failed'})
    }
    db.query(selectQuery, [result.insertId], (err, movies) => {
      if (err) {
        console.error(err)
        return res.status(500).json({error: 'Database query failed'})
      }

      res.json(movies[0])
    })
  })
  // db.query('INSERT INTO movies SET ?', [], (err, result) => {})
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  const query = 'DELETE FROM movies WHERE id = ?'
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({error: 'Database query failed'})
    }
    res.json(result)
  })
})

module.exports = router