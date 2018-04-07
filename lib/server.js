import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import CourseRandomizer from './services/CourseRandomizer';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port, function() {
	console.log(`App running on ${port}`);
});

app.get('/randomizer', (req,res) => {
	res.json(CourseRandomizer.getRandomCourse(req.query.type));
});

export default app;
