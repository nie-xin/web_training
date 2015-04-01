var fs = require('fs');
var request = request('request');
var htmlparser = require('htmlparser');
var configFilename = './ress_feeds.txt';

function checkForRSSFile() {
  fs.exists(configFilename, function(exists) {
    if (!exists) return next(new Error('Missing RSS file: '+ configFilename));
    next(null, configFilename);
  });
}

function readRSSFile(configFilename) {
  fs.readFile(configFilename, function(err, feedList) {
    if (err) return next(err);

    feedList = feedList
                .toString()
                .replace(/^\s+|\s+$/g, '')
                .split("\n");
    var random = Math.floor(Math.random() * feedList.length);
    next(null, feedList[random]);
  });
}

function downloadRSSFeed (feedUrl) {
  request({uri: feedUrl}, function(err, res, body) {

  })
}
