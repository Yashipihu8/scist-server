const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { createSubject, querySubject, getSubjectById, deleteSubject } = require('../services/subject.service');
const pick = require('../utils/pick');

const addSubject = catchAsync(async (req, res) => {
  const subject = await createSubject(req.body);
  res.status(httpStatus.CREATED).send({ subject });
});

const getAllSubjects = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['subjectName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await querySubject(filter, options);
  res.send(result);
});

const findSubject = catchAsync(async (req, res) => {
  const subject = await getSubjectById(req.params.subjectId);
  if (!subject) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Subject not found');
  }
  res.send(subject);
});

const removeSubject = catchAsync(async (req, res) => {
  await deleteSubject(req.params.subjectId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  addSubject,
  getAllSubjects,
  findSubject,
  removeSubject,
};
