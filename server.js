const path = require('path');
const logger = require('morgan');
const express = require('express');
const { sendResponse } = require('./app/helpers');
// const { fetchAuthorProfile } = require('./app/scotch');
const { fetchAuthorProfile } = require('./app/vietlott');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
app.use(logger('dev'));
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('/vietlott/:type', (req, res, next) => {
	const type = req.params.type;
	sendResponse(res)(fetchAuthorProfile(type));
});

app.listen(port, () => console.log(`App started on port ${port}.`));
