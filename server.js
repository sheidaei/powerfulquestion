var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var listofquestions = require('./public/resources/listofquestions.js');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))


app.get('/', function (req, res) {
	var numberofquestions = listofquestions.length;
	var randomline =  Math.floor(Math.random() * numberofquestions);
	res.render('index', { color: Math.floor(Math.random()*16777215).toString(16), title: 'It All Starts With a Question, a Powerful One!', message: `${listofquestions[randomline]}`, questionnumber: randomline, totalnumberofquestions: numberofquestions});
});

app.get('/question/:id', function (req, res) {
	var numberofquestions = listofquestions.length;
	var randomline =  req.params.id;
	res.render('index', { color: Math.floor(Math.random()*16777215).toString(16), title: 'It All Starts With a Question, a Powerful One!', message: `${listofquestions[randomline]}`, questionnumber: randomline, totalnumberofquestions: numberofquestions});
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});