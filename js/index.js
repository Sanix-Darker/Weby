  /*
  * index.js
  * I assumes the fact that i can not disallow the full change on the page intentionnally, a user need to know how the thing will work!
  */

  // TO BE BUILD
  // EXAMPLES PROJECT WILL BE TABLES in variable
  // ===========================================

  // Variables
  var html = document.getElementById("pen-html"),
    css = document.getElementById("pen-css"),
    js = document.getElementById("pen-js"),
    last_html = html.value, // Make the refresh more efficient and FAST
    last_css = css.value,
    last_js = js.value,
    problem = false, // To check if something going wrong and blog executions
    file_ = document.getElementById("file_"),
    link = document.getElementById('linkydoo'),
    xmlhttp = new XMLHttpRequest(),
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

  var txt='', content, initialContent = '<center>'+
                          '<h1 style="margin-top:155px;">Welcome to Weby</h1>'+
                          'Create by <a href="https://github.com/Sanix-Darker" target="_blank">Sanix darker</a> -> (<a href="https://www.facebook.com/saadjio?ref=bookmarks" target="_blank">ANGE SAADJIO</a>)'+
                          '<p>You can see/download the code source of the project <a href="https://github.com/Sanix-Darker/Weby">here</a><br>'+
                          '"Modify your source code in the HTML, CSS, and JS boxes on the left to start working."<br>'+
                            '"<i>NB: All the global script or style could appear on the entire page, because i allowed it for learning!</i>"'+
                          '</p>'+
                        '</center>';


  // Enable the tab character onkeypress (onkeydown) inside textarea...
  enableTab(html);
  enableTab(css);
  enableTab(js);


  output.innerHTML = initialContent;

 
  setInterval(function(){
    if(html.value=='' && js.value=='' && !problem){
        output.innerHTML = initialContent;
    }
  }, 1000);


  html.addEventListener("keyup", function() {
    updateOutput();
  });

  css.addEventListener("keyup", function() {
    updateOutput();
  });

  // add the delay because of alert test some times
  js.addEventListener("keyup", function() {
    delay(function() {
      updateOutput();
    }, 1500);
  });

  //=====================Loading options==============================

    // For select a project on the list of projects
    projectSELECT.addEventListener("change", function() {
      //ReadInternalProject("project/"+projectSELECT.value);
    });

    // To load Options!!!
    optionSELECT.addEventListener("change", function() {

      switch (optionSELECT.value) {
        case "open":
          // Open a project
          file_.click();
          break;
        case "save":
          // Saving the project Locally
          saveProject();
          break;
        case "learn1":
          console.log("learn1 selected.");
          break;
        case "learn2":
          console.log("learn2 selected.");
          break;
        case "loadExemples":
          console.log("load selected.");
          break;
        case "exit":
          close_window();
          break;
        default:
          console.log("Nothing selected.");
      }
      optionSELECT.value = 0;

    });

    if (window.File && window.FileReader && window.FileList && window.Blob) {

      file_.addEventListener("change", function() {
        ReadProject();
      }, false);
      
    }
    else { 
       alert("Files are not supported"); 
    }

      


