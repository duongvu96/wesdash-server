'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _CourseRandomizer = require('./services/CourseRandomizer');

var _CourseRandomizer2 = _interopRequireDefault(_CourseRandomizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.json({ type: 'application/vnd.api+json' }));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _methodOverride2.default)('X-HTTP-Method-Override'));

app.listen(port, function () {
	console.log('App running on ' + port);
});

app.get('/randomizer', function (req, res) {
	res.json(_CourseRandomizer2.default.getRandomCourse(req.query.type));
});

exports.default = app;