var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var listofquestions = require('./public/resources/listofquestions.js');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))


app.get('/', function (req, res) {
	var randomline =  Math.floor(Math.random() * listofquestions.length) + 1 ;
	res.render('index', { color: Math.floor(Math.random()*16777215).toString(16), title: 'It all starts with a Question, a Powerful one!', message: `${listofquestions[randomline]}` });
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});