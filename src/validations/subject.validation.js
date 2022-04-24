const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSubject = {
  body: Joi.object().keys({
    subjectCode: Joi.string().required(),
    subjectName: Joi.string().required(),
    semester: Joi.string().required(),
    courseId: Joi.string().custom(objectId),
  }),
};

const getSubjects = {
  query: Joi.object().keys({
    subjectName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string().custom(objectId),
  }),
};

const deleteSubject = {
  params: Joi.object().keys({
    subjectId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSubject,
  getSubjects,
  getSubject,
  deleteSubject,
};
