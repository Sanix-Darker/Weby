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

  var txt='', content;

  var initialContent = '<center>'+
                          '<h1 style="margin-top:155px;">Welcome to Weby</h1>'+
                          'Create by <a href="https://github.com/Sanix-Darker" target="_blank">Sanix darker</a> -> (<a href="https://www.facebook.com/saadjio?ref=bookmarks" target="_blank">ANGE SAADJIO</a>)'+
                          '<p>You can see/download the code source of the project <a href="https://github.com/Sanix-Darker/Weby">here</a><br>'+
                          '"Modify your source code in the HTML, CSS, and JS boxes on the left to start working."<br>'+
                            '"<i>NB: All the global script or style could appear on the entire page, because i allowed it for learning!</i>"'+
                          '</p>'+
                        '</center>';

  output.innerHTML = initialContent;



  function remove(id) {
    var victim = document.getElementById(id);
    if (victim) {
      victim.parentNode.removeChild(victim);
    }
  }

  function emptyAll(){
    html.value="", css.value="", js.value="";
  }


  function updateOutput() {
    // clean up
    remove("pen-style");
    remove("pen-script");
    
    // add HTML
    if(html.value!="" && html.value!=last_html){ // We change the Html content untill it content some thing
      output.innerHTML = html.value;
      last_html = html.value;
    }
    
    // add CSS
    if(css.value!=""){
      var style = document.createElement("style");
      style.id = "pen-style";
      style.innerHTML = css.value.replace(" *","#output *");
      last_css = css.value.replace(" *","#output *");
      document.head.appendChild(style);
    }
    
    // add JS
    if(js.value!="" && js.value!=last_js){
      var script = document.createElement("script");
      script.id = "pen-script";
      // TO manage if all the document die or is affected
      if((js.value).includes("document.write")){

        advice = '<a href="" style="color:red;font-weight:bold;"> << Back to the simulator / Retour au simulateur</a>';
        script.innerHTML = js.value.replace("')","").replace('")','').replace('("',"('")+" <br> "+advice+ "')";
      
      }else
        script.innerHTML = js.value;

      last_js = js.value;
      document.body.appendChild(script);
    } 
    
  }

/*
  *
  * ReadExternalProject
  *
  * Open external JSON project
*/

  function ReadProject(){
    emptyAll();

    //Get the file object
    var file_R = file_.files[0];

    //Initialize the FileReader object to read the 2file 
    var fileReader = new FileReader(); 
    fileReader.onload = function (e) {

      output.innerHTML = "<center><br><br><br><br><h3> <img src='img/ajax-loader.gif'> Loading project..... </h3></center>";
      if(isJson(fileReader.result)){
        content = JSON.parse(fileReader.result);
        // in the editors, put the code
        html.value= content.html;
        css.value= content.css;
        js.value= content.js;
        updateOutput();
      }else{
        problem = true;
        output.innerHTML = "<center><br><br><br><br><h4> There is a problem loading your project! </h4></center>";
      }

    } 
    fileReader.readAsText(file_R);
  }


  function refresh(){
    delay(function() {
      updateOutput();
    }, 100);
  }

  function isJson(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }

 
  setInterval(function(){
    if(html.value=='' && js.value=='' && !problem){
        output.innerHTML = initialContent;
    }
  }, 1000);


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

    // For select a project on the list of projects
    projectSELECT.addEventListener("change", function() {
      //ReadInternalProject("project/"+projectSELECT.value);
    });

    // To load Options!!!
    optionSELECT.addEventListener("change", function() {

      switch (optionSELECT.value) {
        case "open":
        // Open the project Locally
          file_.click();
          break;
        case "save":
          // Saving the project Locally
          var projectName = prompt("Please enter your project name", "My project");

          if (projectName != null) {

              projectName.replace(".","_");
              var project_content = '{'+
                                        '"html": "'+html.value.replace('"','\"')+'",'+
                                        '"css": "'+css.value.replace('"','\"')+'",'+
                                        '"js": "'+js.value.replace('"','\"')+'"'+
                                    '}';

             //Save the file contents as a DataURI
             var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(project_content);

             //Write it as the href for the link
             link.download=(projectName+".json");
             link.href = dataUri;
             link.click();

          }else{
            alert("If you want to save your project, enter a name.");
          }

          break;
        case "learn1":
          console.log("learn1 selected.");
          break;
        case "learn2":
          console.log("learn2 selected.");
          break;
        case "lang":
          console.log("param selected.");
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

      


