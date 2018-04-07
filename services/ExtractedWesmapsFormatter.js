import fs from 'fs';

function formatForRandomizer(wesmaps) {
	const formattedWesmaps = {};
	const divisions = Object.keys(wesmaps);
	divisions.forEach((division) => {
		formattedWesmaps[division] = {}
		const departments = Object.keys(wesmaps[division]);
		departments.forEach((department) => {
			formattedWesmaps[division][department] = {}
			const terms = Object.keys(wesmaps[division][department]);
			terms.forEach((term) => {
				formattedWesmaps[division][department][term] = 
					Object.keys(wesmaps[division][department][term]).map((courseId) => {
						return wesmaps[division][department][term][courseId];
					}).filter((course) => {
						return course.prereq === 'None';
					});
			});
		});
	});

	fs.writeFile(
		'wesmaps_courses_random.json', 
		JSON.stringify(formattedWesmaps), 
		'utf8', 
		() => {});
	
	return formattedWesmaps;
}

const ExtractedWesmapsFormatter = {
	formatForRandomizer
};

export default ExtractedWesmapsFormatter;