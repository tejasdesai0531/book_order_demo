var express = require('express');
var router = express.Router();

const employeeRouter = require('./employee/employee.route')
const userRouter = require('./user/user.router')
//const arithmeticRouter = require('./arithmetic/arithmetic.route')

router.use('/employee', employeeRouter)
router.use('/user', userRouter)
// router.use('/arithmetic', arithmeticRouter)

module.exports = router;