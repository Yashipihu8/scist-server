const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { addCourse, queryCourse, getCourseById } = require('../services/course.service');
const pick = require('../utils/pick');

const insertCourse = catchAsync(async (req, res) => {
  const course = await addCourse(req.body);
  res.status(httpStatus.CREATED).send({ course });
});

const getCourses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await queryCourse(filter, options);
  res.send(result);
});

const findCourseById = catchAsync(async (req, res) => {
  const course = await getCourseById(req.params.courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(course);
});

module.exports = {
  insertCourse,
  getCourses,
  findCourseById,
};
