const mongoose = require('mongoose');
// const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const coursesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    yearSection: {
      type: String,
      required: true,
    },
    department: { type: mongoose.SchemaTypes.ObjectId, ref: 'Department', required: true },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
coursesSchema.plugin(toJSON);
coursesSchema.plugin(paginate);

/**
 * @typedef Courses
 */
const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
