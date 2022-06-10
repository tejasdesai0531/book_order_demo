var express = require('express');
const req = require('express/lib/request');
var router = express.Router();


const employeeController = require('./employee.controller')

router.get('/', employeeController.getEmployeeList)
router.get('/:id', employeeController.getEmployeeDetails)

router.post('/', employeeController.addEmployee)
router.patch('/:id', employeeController.updateEmployee)
router.delete('/:id', employeeController.deleteEmployee)


module.exports = router;