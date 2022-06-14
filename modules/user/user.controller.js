const Joi = require('joi');
const knex = require('../../knex');

async function getUserList(req, res) {

    try {
        let userList = await knex.select('*').from('User')
        res.send(userList)
    } catch (error) {    
        console.log(error)
        res.send({
            error: true,
            msg: "Something went wrong"
        })

    }
}

async function addUser(req, res) {
    
    

    let name = req.body.name
    let contact = req.body.contact
    

    let user = {
        name: name,
        contact: contact
    }

    let result = await knex('User').insert(user)

    res.send({result: result})
}

async function updateUser(req, res) {

    let id = parseInt(req.params.id)
    let name = req.body.name
    let contact = req.body.contact


    let user = {
        name: name,
        contact: contact
        
    }

    let result = await knex('User').update(user).where("id", id)

    res.send({
        "result": result
    })
}

async function getUserDetails(req, res) {
    let id = parseInt(req.params.id)

    let result = await knex('User').select("*").where("id", id)

    res.send({result: result})
}

async function deleteUser(req, res) {

    let id = parseInt(req.params.id)

    let result = await knex('User').delete().where("id", id)

    res.send({result: result})

}

module.exports = {
    getUserList,
    addUser,
    updateUser,
    getUserDetails,
    deleteUser
}


