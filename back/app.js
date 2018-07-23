const express = require('express')
const bodyParser = require('body-parser')
const movieRouter = require('./routes/movies')
const app = express()
app.use(bodyParser.json())

// création d'une route en GET //
app.get('/',(req, res) => {
  res.send("Test back-end")
})

app.use('/api/movies', movieRouter)

app.listen(5000)