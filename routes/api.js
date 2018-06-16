const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let pageById = {};

// TODO: add error handling to all route handlers.

router.get('/list', (req, res, next) => {
	res.json(Object.values(pageById));
});

router.get('/get/:id', (req, res, next) => {
	const id = req.params.id;
	const page = pageById[id];
	if (page !== undefined) {
		res.json(page);
	}
});

router.post('/create', (req, res, next) => {
	const page = req.body;
	pageById[page.id] = page;
  res.json({ msg: 'Page creation successful.'});
});

router.post('/update', (req, res, next) => {
	const page = req.body;
	pageById[page.id] = page;
	res.json({ msg: 'Page update successful.'});
});

module.exports = router;