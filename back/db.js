const mysql = require('mysql')
const dbSettings = require('./db-settings.json')
const connection = mysql.createConnection(dbSettings)

module.exports = connection