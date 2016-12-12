var express=require('express');
var app=express();
var port = process.env.PORT || 3000

app.get('/', function (req, res) {
    getRandomLine( 'listofquestions.txt', function ( line ) { res.send( line ); } );
})
/*--------------------Routing Over----------------------------*/

function getRandomLine(filename, callback){
var fs = require('fs');
fs.readFile(filename, function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    var length = Math.floor(Math.random() * array.length) + 1 ;
        console.log(array[length]);
        callback (array[length]);
});
}

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`)
});