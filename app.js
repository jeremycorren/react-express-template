const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
