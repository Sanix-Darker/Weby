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

function remove(id) {
  var victim = document.getElementById(id);
  if (victim) {
    victim.parentNode.removeChild(victim);
  }
}


output.innerHTML = '<html >\
<head>\
  <title>TEST</title>\
</head>\
<body>\
  <center>\
    <h1>Bienvenue sur Weby</h1>\
    Cr&eacute;er par <a href="https://www.facebook.com/saadjio?ref=bookmarks" target="_blank">Sanix (ANGE SAADJIO)</a>\
    <p>\
      "Modifiez votre code source dans les zones HTML, CSS et JS &agrave; gauche pour commencer &agrave; travailler."\
    </p>\
  </center>\
</body>\
</html>';


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
  }, 1000);
}

html.addEventListener("keyup", function() {
  refresh();
});

css.addEventListener("keyup", function() {
  refresh();
});

js.addEventListener("keyup", function() {
  refresh();
});