const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'auth.html'));
});

app.listen(8080, () => console.log('Server Up'));