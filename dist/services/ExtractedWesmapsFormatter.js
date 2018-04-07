'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatForRandomizer(wesmaps) {
	var formattedWesmaps = {};
	var divisions = Object.keys(wesmaps);
	divisions.forEach(function (division) {
		formattedWesmaps[division] = {};
		var departments = Object.keys(wesmaps[division]);
		departments.forEach(function (department) {
			formattedWesmaps[division][department] = {};
			var terms = Object.keys(wesmaps[division][department]);
			terms.forEach(function (term) {
				formattedWesmaps[division][department][term] = Object.keys(wesmaps[division][department][term]).map(function (courseId) {
					return wesmaps[division][department][term][courseId];
				}).filter(function (course) {
					return course.prereq === 'None';
				});
			});
		});
	});

	_fs2.default.writeFile('wesmaps_courses_random.json', JSON.stringify(formattedWesmaps), 'utf8', function () {});

	return formattedWesmaps;
}

var ExtractedWesmapsFormatter = {
	formatForRandomizer: formatForRandomizer
};

exports.default = ExtractedWesmapsFormatter;