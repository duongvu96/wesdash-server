import RandomUtil from '../utils/RandomUtil';
import courses from './wesmaps_courses_random';

function getRandomCourse(randomType) {
	const division = courses[randomType];
	const term = new Date().getMonth() < 5 ? "Fall" : "Spring";

	let randomDepartmentCourses = (RandomUtil.getRandomObjectValue(division))[term];
	while (randomDepartmentCourses.length === 0) {
		randomDepartmentCourses = (RandomUtil.getRandomObjectValue(division))[term];
	}

	const randomCourse = RandomUtil.getRandomArrayElement(randomDepartmentCourses);

	return randomCourse;
}

const CourseRandomizer = {
	getRandomCourse
};

export default CourseRandomizer;