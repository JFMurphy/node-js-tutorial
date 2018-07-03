var express = require('express');
var bodyParser= require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended:false});

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

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    // qs means querystring
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function (req, res) {
    var data = {name: 'john', age: 23, job: 'Unknown', hobbies: ['eating', 'drinking', 'swimming']};
    res.render('profile', {person: req.params.id, data: data});
});

app.listen(3000);