const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // tells render engine to look to 'ejs' type files
app.set('views', 'views'); // this means you're setting the view engine to look in the 'views' folder; express knows that views is a thing and to look to the directory 'views'

app.get('/', function(req, res) {
    res.render('main', { animalSound: 'Hello, world'});
});

app.get('/cats', function(req, res) {
    res.render('main', {animalSound: 'Meow'});
});

app.get('/cats_and_dogs', function(req, res) {
    res.render('main', {animalSound: 'Living together!'});
});

app.get('/greet/:name', function(req, res) {
    res.render('Greet', {name: req.params.name});
});

app.get('/year', function(req, res) {
    res.render('Age', {age: req.query.age});
});

app.listen('3000', function() {
    console.log('This is listening')
});