var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var listofquestions = require('./public/resources/listofquestions.js');
var numberofquestions = listofquestions.length;


app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))


app.get('/', function (req, res) {
	var questionNumber =  getRandomQuestionNumber(numberofquestions);
	res.render('index', { color: getRandomColor(), title: getTitle(), message: `${listofquestions[questionNumber-1]}`, questionnumber: questionNumber, totalnumberofquestions: numberofquestions});
});

app.get('/question/:id', function (req, res) {
	var questionNumber =  req.params.id;
	res.render('question', { color: getColor(questionNumber/numberofquestions), title: getTitle(), message: `${listofquestions[questionNumber-1]}`, questionnumber:  questionNumber, totalnumberofquestions: numberofquestions});
});

function getRandomQuestionNumber(numberofquestions)
{
	return Math.floor(Math.random() * numberofquestions);
}

function getColor(colorNumber)
{
	return getRandColor(5, +colorNumber);
}

function getRandomColor()
{
	return getRandColor(4, Math.random());
}

function getRandColor(brightness, colorNumber){

    // Six levels of brightness from 0 to 5, 0 being the darkest
	if(colorNumber<0.3)
	{
    	var rgb = [+colorNumber * 256, 256, 256];
	}
	else if(colorNumber<0.6)
	{
    	var rgb = [256, +colorNumber * 256, 256];
	}
	else{
    	var rgb = [256, 256, +colorNumber * 256];
	}
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
}

function getTitle()
{
	return 'It All Starts With a Question, a Powerful One!';
}

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});