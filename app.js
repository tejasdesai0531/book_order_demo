const express = require('express')
const req = require('express/lib/request')
const app = express()

const math = require('./math')

const knex = require('./knex')

app.use(express.json())


app.get('/employee', async (req, res) => {

    let empList = await knex.select('*').from('Employee')
    res.send(empList)

})

app.post('/employee', async (req, res) => {

    let name = req.body.name
    let salary = req.body.salary
    let city = req.body.city
    let job = req.body.job

    let emp = {
        emp_name: name,
        emp_salary: salary,
        city: city,
        job: job
    }

    let result = await knex('Employee').insert(emp)

    res.send(result)
})

app.patch('/employee/:id', async (req, res) => {

    let id = req.params.id

    let name = req.body.name
    let salary = req.body.salary
    let city = req.body.city
    let job = req.body.job

    let emp = {
        emp_name: name,
        emp_salary: salary,
        city: city,
        job: job
    }

    let result = await knex('Employee').update(emp).where("emp_id", id)

    res.send({
        "result": result
    })
})

app.get('/employee/:id', async (req, res) => {
    let id = req.params.id

    let result = await knex('Employee').select("*").where("emp_id", id)

    res.send(result)
})

app.delete('/employee/:id', async (req, res) => {

    let id = req.params.id

    let result = await knex('Employee').delete().where('emp_id', id)

    res.send({result: result})

})

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