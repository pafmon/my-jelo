var request = require('request');

var grabber = require('./lib/grabber');
var downloader = require('./lib/downloader');

//var url = 'http://www.ondacero.es/programas/julia-en-la-onda/';
var url = 'http://www.ondacero.es/rss/podcast/8323/podcast.xml';

grabber.grab(url, function(audios){
/*
  audios.forEach(function(audio) {
    console.log(audio.id);
    console.log(audio.src);
  });
*/
  var aux = [];
  aux.push(audios[0]);
  aux.push(audios[1]);
  aux.push(audios[2]);


  var audio = audios[0];
  audios[0].download();

/*
  downloader.download(audio.id,audio.src,"./mp3/"+audio.id+".mp3",function (size){
    audio.size = size;
  });
*/

});
