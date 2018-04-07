'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _RandomUtil = require('../utils/RandomUtil');

var _RandomUtil2 = _interopRequireDefault(_RandomUtil);

var _wesmaps_courses_random = require('./wesmaps_courses_random');

var _wesmaps_courses_random2 = _interopRequireDefault(_wesmaps_courses_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRandomCourse(randomType) {
	var division = _wesmaps_courses_random2.default[randomType];
	var term = new Date().getMonth() < 5 ? "Fall" : "Spring";

	var randomDepartmentCourses = _RandomUtil2.default.getRandomObjectValue(division)[term];
	while (randomDepartmentCourses.length === 0) {
		randomDepartmentCourses = _RandomUtil2.default.getRandomObjectValue(division)[term];
	}

	var randomCourse = _RandomUtil2.default.getRandomArrayElement(randomDepartmentCourses);

	return randomCourse;
}

var CourseRandomizer = {
	getRandomCourse: getRandomCourse
};

exports.default = CourseRandomizer;