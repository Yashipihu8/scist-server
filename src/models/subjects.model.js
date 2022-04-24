const mongoose = require('mongoose');
// const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const subjectsSchema = mongoose.Schema(
  {
    subjectCode: {
      type: String,
      required: true,
    },
    subjectName: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    course: { type: mongoose.SchemaTypes.ObjectId, ref: 'Courses', required: true },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
subjectsSchema.plugin(toJSON);
subjectsSchema.plugin(paginate);

/**
 * @typedef Subjects
 */
const Subjects = mongoose.model('Subjects', subjectsSchema);

module.exports = Subjects;
