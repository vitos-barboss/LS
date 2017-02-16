'use strict';
var express = require('express');
var path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/get1', (req, res, next) => {
  res.send('get1');
});
app.get('/get2', (req, res, next) => {
  res.send('get2');
});
app.get('/get3', (req, res, next) => {
  res.send('get3');
});

app.listen(3000);
