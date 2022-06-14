const express = require('express')
const req = require('express/lib/request')
const app = express()
const math = require('./math')
const knex = require('./knex')
const indexRouter = require('./modules/route')

app.use(express.json())



app.use('/api', indexRouter)


module.exports = app;