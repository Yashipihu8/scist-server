const express = require('express');
const validate = require('../../middlewares/validate');
const { create, queryDepartmentsValidation, getDepartment } = require('../../validations/department.validation');
const { register, getDepartments, findDepartment } = require('../../controllers/department.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').post(validate(create), register).get(validate(queryDepartmentsValidation), getDepartments);

router.route('/:deptId').get(auth('admin'), validate(getDepartment), findDepartment);

module.exports = router;
