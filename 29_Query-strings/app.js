var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    console.log(req.query);
    // qs means querystring
    res.render('contact', {qs: req.query});
});

app.get('/profile/:id', function (req, res) {
    var data = {name: 'john', age: 23, job: 'Unknown', hobbies: ['eating', 'drinking', 'swimming']};
    res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);