var request = require('request');
var express = require('express');

var grabber = require('./lib/grabber');
var utils = require('./lib/utils');


var app = express();

var url = 'http://www.ondacero.es/rss/podcast/8323/podcast.xml';
var port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/js',express.static(__dirname + '/js'));
app.use('/css',express.static(__dirname + '/css'));
app.get('/play', function(request, response) {
  response.render('pages/index');
});


app.get('/', function (req, res) {
  grabber.grab(url, function(audios){
    res.write("<html><body><ul>");

    var date = audios[0].date;

    res.write("<li>"+date+"<ul>");

    for(var i in audios){

      var audio = audios[i];
      if (date != audio.date){
                res.write("</ul></li><li>"+audio.date+"<ul>");
                date = audio.date;
      }

      res.write("<li>");
      res.write("<a href='"+audio.src+"'>");
      res.write(utils.latinise(audio.name));
      res.write("</a>");
      res.write("</li>");
    }

    res.write("</ul></li></ul></body></html>");
    res.end();
  });
});

app.listen(port, function () {
  console.log('RSS Server Listening on port '+port+'!');
});
