const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let database = {
	data: 'This is a message from the API!'
};

router.get('/get', function(req, res, next) {
  res.json(database);
});

module.exports = router;