var express = require('express');
var router = express.Router();

const employeeRouter = require('./employee/employee.route')
const authRouter = require('./auth/auth.route')
const authMiddleWare = require('../middlewares/auth.middleware')
const arithmeticRouter = require('./arithmetic/arithmetic.route');
const { route } = require('./employee/employee.route');

router.use('/auth', authRouter)
router.use('/employee', authMiddleWare.authCheck, employeeRouter)
// router.use('/arithmetic', arithmeticRouter)

module.exports = router;