var express = require('express');
var router = express.Router();

const passport = require('passport');

require('./../middleware/passport')(passport);

const EmployeeController = require('../controllers/employee.controller');
const UserAccountController = require('../controllers/userAccount.controller');
router.post('/login', UserAccountController.login);
router.post('/refreshToken', UserAccountController.refreshToken);

router.get('/getEmployees', EmployeeController.getEmployees);
router.post('/createEmployee', EmployeeController.createEmployee);

router.get('/getDesignation', EmployeeController.getDesignation);
router.get('/getRole', EmployeeController.getRole);
router.post('/deleteEmployee', EmployeeController.deleteEmployee);

router.post('/getEmployee', EmployeeController.getEmployee);
router.post('/updateEmployee', EmployeeController.updateEmployee);

router.post('/checkEmail', EmployeeController.checkEmail);

module.exports = router;
