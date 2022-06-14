const Joi = require('joi'); 

function validateUser(req, res, next){

    const schema = Joi.object({
        name: Joi.required().messages({"any.required": "Name is required"}),
        contact: Joi.string().length(10).pattern(/^[0-9]+$/).required()   
    })

    let validationResult = schema.validate(req.body)
    
    if(validationResult.error) {

        let message = validationResult.error.details[0].message
        res.send({
            error: true,
            message: message
        })
        return
    } else {

        next()


    }


}

module.exports = {
    validateUser
}