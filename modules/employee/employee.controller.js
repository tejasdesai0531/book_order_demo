const knex = require('../../knex')
const Joi = require('joi');

async function getEmployeeList(req, res) {

    try {
        let empList = await knex.select('*').from('Employee')
        res.send(empList)
    } catch (error) {   
        res.send({
            error: true,
            msg: "Something went wrong"
        })
    }
}

async function addEmployee(req, res) {

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

    res.send({result: result})
}

async function updateEmployee(req, res) {

    console.log(req.body)

    const schema = Joi.object({
        name: Joi.required().messages({"any.required": "Name is required"}),
        salary: Joi.number().required().messages({
            "any.required": "Salary is required",
            "number.base": "Salary must be number"
        }),
        city: Joi.required(),
        job: Joi.required()
    })

    let validationResult = schema.validate(req.body)
    
    if(validationResult.error) {
        let message = validationResult.error.details[0].message
        res.send({
            error: true,
            message: message
        })
        return
    }


    let id = parseInt(req.params.id)
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
}

async function getEmployeeDetails(req, res) {
    let id = parseInt(req.params.id)

    let result = await knex('Employee').select("*").where("emp_id", id)

    res.send({result: result})
}

async function deleteEmployee(req, res) {

    let id = parseInt(req.params.id)

    let result = await knex('Employee').delete().where('emp_id', id)

    res.send({result: result})

}

module.exports = {
    getEmployeeList,
    addEmployee,
    updateEmployee,
    getEmployeeDetails,
    deleteEmployee
}