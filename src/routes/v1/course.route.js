const express = require('express');
const validate = require('../../middlewares/validate');
const { addCourses, queryCoursessValidation, getCourse } = require('../../validations/course.validation');
const { insertCourse, getCourses, findCourseById } = require('../../controllers/course.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').post(validate(addCourses), insertCourse).get(auth('admin'), validate(queryCoursessValidation), getCourses);

router.route('/:courseId').get(auth('admin'), validate(getCourse), findCourseById);

module.exports = router;
