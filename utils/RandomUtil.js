function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomArrayElement(arr) {
	return arr.length === 0 ? null : arr[getRandomInteger(0, arr.length - 1)];
}

function getRandomObjectValue(obj) {
	return Object.keys(obj).length === 0 ? null : obj[getRandomArrayElement(Object.keys(obj))];
}

const RandomUtil = {
	getRandomArrayElement,
	getRandomObjectValue
};

export default RandomUtil;