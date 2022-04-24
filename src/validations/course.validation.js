const Joi = require('joi');
const { objectId } = require('./custom.validation');

const addCourses = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    yearSection: Joi.string().required(),
    departmentId: Joi.required().custom(objectId),
  }),
};

const queryCoursessValidation = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  addCourses,
  queryCoursessValidation,
  getCourse,
};
