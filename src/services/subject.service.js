const Subjects = require('../models/subjects.model');

/**
 * Add Department
 * @param {string} subjectCode
 * @param {string} subjectName
 * @param {string} semester
 * @param {string} courseId
 * @returns {Promise<Subjects>}
 */
const createSubject = async (subjectBody) => {
  const { subjectCode, subjectName, semester, courseId } = subjectBody;
  const subjectDoc = await Subjects.create({
    subjectCode,
    subjectName,
    semester,
    course: courseId,
  });
  return subjectDoc;
};

const querySubject = async (filter, options) => {
  const subjects = await Subjects.paginate(filter, options);
  return subjects;
};

/**
 * Find subject by id
 * @param {string} id
 */
const getSubjectById = async (id) => {
  return Subjects.findById(id);
};

/**
 * Delete Subject
 * @param {string} id
 * @returns { Message }
 */
const deleteSubject = async (id) => {
  return Subjects.deleteOne(id);
};

module.exports = {
  createSubject,
  querySubject,
  getSubjectById,
  deleteSubject,
};
