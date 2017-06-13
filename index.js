let gulp = require('gulp'),
    webshot=require('webshot');
var rename = require("rename");
var fs = require('fs');
let target = 'algolia.com';


var options = {
  screenSize: {
    width: 1920,
    height: 6000
  },
  shotSize: {
    width: 1920,
    height: 6000
  }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36'
    + ' (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',

quality: 100,
renderDelay: 3000,
};

var optionsExtrude = {
  screenSize: {
    width: 1920,
    height: 6000
  },
  shotSize: {
    width: 1920,
    height: 6000
  }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36'
    + ' (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',

quality: 100,
renderDelay: 3000,
 customCSS: "html { outline: 1px solid lime; outline-offset: -1px; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; -webkit-perspective: 600px; perspective: 600px; -webkit-transform: rotateY(16deg) scale(0.6) translateX(5%) translateY(-26%) skewY(-6deg); transform: rotateY(16deg) scale(0.6) translateX(5%) translateY(-26%) skewY(-6deg); } html * { outline: 1px solid lime; outline-offset: -1px; -webkit-box-shadow: 0 0 100px rgba(0, 0, 0, 0.15), -1px -1px 0 rgba(0, 0, 0, 0.1), -2px -2px 0 rgba(0, 0, 0, 0.1), -3px -3px 0 rgba(0, 0, 0, 0.1), -4px -4px 0 rgba(0, 0, 0, 0.1), -5px -5px 0 rgba(0, 0, 0, 0.1), -6px -6px 0 rgba(0, 0, 0, 0.1); box-shadow: 0 0 100px rgba(0, 0, 0, 0.15), -1px -1px 0 rgba(0, 0, 0, 0.1), -2px -2px 0 rgba(0, 0, 0, 0.1), -3px -3px 0 rgba(0, 0, 0, 0.1), -4px -4px 0 rgba(0, 0, 0, 0.1), -5px -5px 0 rgba(0, 0, 0, 0.1), -6px -6px 0 rgba(0, 0, 0, 0.1); } html *:before, html *:after { outline: 1px solid #0ff; outline-offset: -1px; -webkit-box-shadow: 0 0 100px rgba(0, 0, 0, 0.15), -1px -1px 0 rgba(0, 0, 0, 0.1), -2px -2px 0 rgba(0, 0, 0, 0.1), -3px -3px 0 rgba(0, 0, 0, 0.1), -4px -4px 0 rgba(0, 0, 0, 0.1), -5px -5px 0 rgba(0, 0, 0, 0.1), -6px -6px 0 rgba(0, 0, 0, 0.1); box-shadow: 0 0 100px rgba(0, 0, 0, 0.15), -1px -1px 0 rgba(0, 0, 0, 0.1), -2px -2px 0 rgba(0, 0, 0, 0.1), -3px -3px 0 rgba(0, 0, 0, 0.1), -4px -4px 0 rgba(0, 0, 0, 0.1), -5px -5px 0 rgba(0, 0, 0, 0.1), -6px -6px 0 rgba(0, 0, 0, 0.1); } html *:after { outline-color: #f0f; } html *:hover { outline-color: #f0f !important; outline-width: 2px !important; outline-style: dashed !important; } html *:hover:before, html *:hover:after { outline-color: #0ff !important; outline-width: 2px !important; } html * { outline-color: rgba(45, 223, 171, 0.9) !important; left: 0.5vw !important; } html * > * { outline-color: rgba(90, 144, 110, 0.9) !important; left: 1vw !important; } html * > * > * { outline-color: rgba(145, 104, 79, 0.9) !important; left: 1.5vw !important; } html * > * > * > * { outline-color: rgba(179, 72, 55, 0.9) !important; left: 2vw !important; } html * > * > * > * > * { outline-color: rgba(205, 53, 40, 0.9) !important; left: 2.5vw !important; } html * > * > * > * > * > * { outline-color: rgba(224, 44, 34, 0.9) !important; left: 3vw !important; } html * > * > * > * > * > * > * { outline-color: rgba(233, 45, 39, 0.9) !important; left: 3.5vw !important; } html * > * > * > * > * > * > * > * { outline-color: rgba(240, 52, 45, 0.9) !important; left: 4vw !important; } html * > * > * > * > * > * > * > * > * { outline-color: rgba(243, 60, 56, 0.9) !important; left: 4.5vw !important; } html * > * > * > * > * > * > * > * > * > * { outline-color: rgba(245, 72, 70, 0.9) !important; left: 5vw !important; }"
};

var optionsMobile = {
  screenSize: {
    width: 414
  , height: 6788
  }
, shotSize: {
    width: 414
  , height: 6788
  }
, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g',
    quality: 100,
renderDelay: 3000,
};


gulp.task('webshot', function() {

    webshot(target, `test/screen-mobile-new.png`, optionsMobile, function(err) {
      // screenshot now saved to google.png
    });
    webshot(target, `test/screen-new.png`, options, function(err) {
      // screenshot now saved to google.png
    });


     webshot(target, `test/3D/screen-extrude.png`, optionsExtrude, function(err) {
      // screenshot now saved to google.png
    });

})


gulp.task('rename-file', function() {
    fs.stat('/test/screen-new.png', function(err, stat) {
        if(err == null) {
           fs.rename('/test/screen-new.png', '/test/screen-old.png');
        } else if(err.code == 'ENOENT') {
            console.log('oops! no screen-new')
        }
    });

    fs.stat('/test/screen-mobile-new.png', function(err, stat) {
        if(err == null) {
           fs.rename('/test/screen-mobile-new.png', '/test/screen-mobile-old.png');
        } else if(err.code == 'ENOENT') {
            console.log('oops! no screen-mobile-new')
        }
    });
})


gulp.task('shot', ['webshot', 'rename-file']);