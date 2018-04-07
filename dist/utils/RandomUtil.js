"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(arr) {
	return arr.length === 0 ? null : arr[getRandomInteger(0, arr.length - 1)];
}

function getRandomObjectValue(obj) {
	return Object.keys(obj).length === 0 ? null : obj[getRandomArrayElement(Object.keys(obj))];
}

var RandomUtil = {
	getRandomArrayElement: getRandomArrayElement,
	getRandomObjectValue: getRandomObjectValue
};

exports.default = RandomUtil;