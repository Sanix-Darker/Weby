/*
* index.js
* I assumes the fact that i can not disallow the full change on the page intentionnally, a user need to know how the thing will work!
*/

var html = document.getElementById("pen-html"),
  css = document.getElementById("pen-css"),
  js = document.getElementById("pen-js"),
  output = document.getElementById("output"),
  weby = document.getElementById("weby"),
  projectSELECT = document.getElementById("project"),
  optionSELECT = document.getElementById("options"),
  delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

var initialContent = '<html >'+
      '<head>'+
        '<title>TEST</title>'+
      '</head>'+
      '<body>'+
        '<center>'+
          '<h1 style="margin-top:155px;">Welcome to Weby</h1>'+
          'Create by <a href="https://github.com/Sanix-Darker" target="_blank">Sanix darker</a> -> (<a href="https://www.facebook.com/saadjio?ref=bookmarks" target="_blank">ANGE SAADJIO</a>)'+
          '<p>'+
          '"Modify your source code in the HTML, CSS, and JS boxes on the left to start working."<br>'+
            '"<i>NB: All the global script or style could appear on the entire page, because i allowed it for learning!</i>"'+
          '</p>'+
        '</center>'+
      '</body>'+
      '</html>';

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
  if(html.value!=""){ // We change the Html content untill it content some thing
    output.innerHTML = html.value;
  }
  
  // add CSS
  if(css.value!=""){
    var style = document.createElement("style");
    style.id = "pen-style";
    style.innerHTML = css.value.replace(" *","#output *");
    document.head.appendChild(style);
  }
  
  // add JS
  if(js.value!=""){
    var script = document.createElement("script");
    script.id = "pen-script";
    if((js.value).includes("document.write")){
      advice = '<a href="" style="color:red;font-weight:bold;"> << Back to the simulator / Retour au simulateur</a>';
      script.innerHTML = js.value.replace("')","").replace('")','').replace('("',"('")+" <br> "+advice+ "')";
    }else{
      script.innerHTML = js.value;
    }
    document.body.appendChild(script);
  } 
  
}

function refresh(){
  delay(function() {
    updateOutput();
  }, 100);
}

setInterval(function(){
  if(html.value=='' && js.value==''){
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
  }, 1500);
});

//=====================Loading options==============================

projectSELECT.addEventListener("change", function() {
  alert("Still working on it");
});

optionSELECT.addEventListener("change", function() {

  switch (optionSELECT.value) {
    case "open":
      console.log("open selected.");
      break;
    case "save":
      console.log("save selected.");
      break;
    case "learn1":
      console.log("learn1 selected.");
      break;
    case "learn2":
      console.log("learn2 selected.");
      break;
    case "param":
      console.log("param selected.");
      break;
    default:
      console.log("Nothing selected.");
  }

  alert("Still working on it");
});

