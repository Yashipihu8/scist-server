const Courses = require('../models/courses.model');

/**
 * Add Department
 * @param {string} name
 * @param {string} yearSection
 * @param {string} departmentId
 * @returns {Promise<Courses>}
 */
const addCourse = async (courseBody) => {
  const { name, yearSection, departmentId } = courseBody;
  const coursDoc = await Courses.create({
    name,
    yearSection,
    department: departmentId,
  });
  return coursDoc;
};

const queryCourse = async (filter, options) => {
  const courses = await Courses.paginate(filter, options);
  return courses;
};

const getCourseById = async (id) => {
  return Courses.findById(id);
};

const queryAllCourse = async () => {
  const coursesData = await Courses.find().populate({ path: 'department', select: '_id title' });
  return coursesData;
};

module.exports = {
  addCourse,
  queryCourse,
  getCourseById,
  queryAllCourse,
};
