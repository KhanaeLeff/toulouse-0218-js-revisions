const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// création d'une route en GET //
app.get('/',(req, res) => {
  res.send("Test back-end")
})

app.listen(5000)