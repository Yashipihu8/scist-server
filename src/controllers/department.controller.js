const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { addDepartment, queryDepartment, getDepartmentById } = require('../services/department.service');
const pick = require('../utils/pick');

const register = catchAsync(async (req, res) => {
  const department = await addDepartment(req.body);
  res.status(httpStatus.CREATED).send({ department });
});

const getDepartments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await queryDepartment(filter, options);
  res.send(result);
});

const findDepartment = catchAsync(async (req, res) => {
  const department = await getDepartmentById(req.params.deptId);
  if (!department) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(department);
});

module.exports = {
  register,
  getDepartments,
  findDepartment,
};
