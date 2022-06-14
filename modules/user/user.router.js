var express = require('express');
var router = express.Router();

const userValidator = require('./user.validator')
const userController = require('./user.controller')

router.get('/', userController.getUserList)
router.get('/:id', userController.getUserDetails)

router.post('/', userValidator.validateUser, userController.addUser)
router.patch('/:id', userValidator.validateUser, userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router; 