var html = document.getElementById("pen-html"),
  css = document.getElementById("pen-css"),
  js = document.getElementById("pen-js"),
  output = document.querySelector(".pen-output"),
  weby = document.getElementById("weby"),
  delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

var initialContent = '<html >\
      <head>\
        <title>TEST</title>\
      </head>\
      <body>\
        <center>\
          <h1 style="margin-top:155px;">Welcome to Weby</h1>\
          Create by <a href="https://github.com/Sanix-Darker" target="_blank">Sanix darker</a> -> (<a href="https://www.facebook.com/saadjio?ref=bookmarks" target="_blank">ANGE SAADJIO</a>)\
          <p>\
          "Modify your source code in the HTML, CSS, and JS boxes on the left to start working."<br>\
            "Modifiez votre code source dans les zones HTML, CSS et JS &agrave; gauche pour commencer &agrave; travailler."\
          </p>\
        </center>\
      </body>\
      </html>';

function remove(id) {
  var victim = document.getElementById(id);
  if (victim) {
    victim.parentNode.removeChild(victim);
  }
}


output.innerHTML = initialContent;


function updateOutput() {
  // clean up
  remove("pen-style");
  remove("pen-script");
  
  // add HTML
  output.innerHTML = html.value;
  
  // add CSS
  var style = document.createElement("style");
  style.id = "pen-style";
  style.innerHTML = css.value;
  document.head.appendChild(style);
  
  // add JS
  var script = document.createElement("script");
  script.id = "pen-script";
  script.innerHTML = js.value;
  document.body.appendChild(script);
}

function refresh(){
  delay(function() {
    updateOutput();
  }, 100);
}

setInterval(function(){
  if(html.value=='' && css.value=='' && js.value==''){
      output.innerHTML = initialContent;
  }
}, 500);

html.addEventListener("keyup", function() {
  refresh();
});

css.addEventListener("keyup", function() {
  refresh();
});

// add the delay because of alert test some times
js.addEventListener("keyup", function() {
  delay(function() {
    updateOutput();
  }, 1300);
});
