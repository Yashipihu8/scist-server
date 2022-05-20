const Department = require('../models/department.model');

/**
 * Add Department
 * @param {string} title
 * @param {string} description
 * @returns {Promise<Department>}
 */
const addDepartment = async (departmentBody) => {
  return Department.create(departmentBody);
};

const queryDepartment = async (filter, options) => {
  const departments = await Department.paginate(filter, options);
  return departments;
};

const getDepartmentById = async (id) => {
  return Department.findById(id);
};

module.exports = {
  addDepartment,
  queryDepartment,
  getDepartmentById,
};
