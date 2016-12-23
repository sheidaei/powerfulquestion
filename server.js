var express=require('express');
var app=express();
var port = process.env.PORT || 3000

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))


app.get('/', function (req, res) {
  //TODO make the file name passing not needed
  getRandomLine( 'public/resources/listofquestions.txt', function ( line ) { res.render('index', { title: 'It all starts with a Question, a Powerful one!', message: `${line}` }) } );
})

/*--------------------Routing Over----------------------------*/

function getRandomLine(filename, callback){
var fs = require('fs');
fs.readFile(filename, function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    //TODO make it a function
    var randomline = Math.floor(Math.random() * array.length) + 1 ;
        console.log(array[randomline]);
        callback (array[randomline]);
});
}

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`)
});