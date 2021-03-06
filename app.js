const express = require('express')
const req = require('express/lib/request')
const app = express()
const math = require('./math')
const knex = require('./knex')
const indexRouter = require('./modules/route')

app.use(express.json())



app.use('/api', indexRouter)



app.post('/add', (req, res) => {

    let first_no = req.body.first_number
    let second_no = req.body.second_number

    let sum = math.add(first_no, second_no)

    let result = {
        sum: sum
    }
    res.send(result)

})

app.post('/sub', (req, res) => {

    let first_no = req.body.first_number
    let second_no = req.body.second_number

    let sub = math.sub(first_no, second_no)

    let result = {
        sub: sub
    }
    res.send(result)

})

app.post('/divide', (req, res) => {

    let first_no = req.body.first_number
    let second_no = req.body.second_number

    let sub = math.divide(first_no, second_no)

    let result = {
        division: sub
    }
    res.send(result)

})


module.exports = app;