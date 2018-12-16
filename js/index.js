  /*
  * index.js
  * I assumes the fact that i can not disallow the full change on the page intentionnally, a user need to know how the thing will work!
  */

  // TO BE BUILD
  // EXAMPLES PROJECT WILL BE TABLES in variable
  // ===========================================

  // For learning tutorial, embed youtube video

  // window.mobilecheck = function() {
  //   var check = false;
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  //   return check;
  // };
  // if (!mobilecheck){
  //   alert("ALERT!!! This version is not yet configure to be use on a phone, open it on your laptop!");
  // } 

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

  var txt='',
      content,
      initialContent = '<center>'+
                          '<img src="https://avatars1.githubusercontent.com/u/22576758?s=400&v=4" style="border-radius: 100%;width:157px;margin-top:100px;"><h1>Welcome to Weby</h1>'+
                          'Created by <a href="https://github.com/Sanix-Darker" target="_blank">Sanix darker</a>'+
                          '<p>You can see/download the code source of the project <a href="https://github.com/Sanix-Darker/Weby">here</a><br>'+
                          '"Modify your source code in the HTML, CSS, and JS boxes on the left to start working."<br>'+
                            '"<i>NB: All the global script or style could appear on the entire page, because i allowed it for learning!</i>"'+
                          '</p>'+
                        '</center>';

  // Triggering button BOXes
  document.getElementById("htmlbox").onclick = function(){
    document.getElementById("pen-html").focus();
  };
  document.getElementById("jsbox").onclick = function(){
    document.getElementById("pen-js").focus();
  };
  document.getElementById("cssbox").onclick = function(){
    document.getElementById("pen-css").focus();
  };

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


    function SetModeCode(mode){

      alert(mode+" mode selected.");
      console.log(mode+" mode is selected.");

      if(mode == "angular"){
        
        angular = true;

        document.getElementById("pen-html").value = '<center><h1>AngularJs Mode selected</h1></center>\n\
          <div ng-app="myModule" class="ng-binding ng-scope">\n\
            <div ng-controller="myController" class="ng-scope">\n\
              <input type="text" ng-model="message" class="ng-pristine ng-untouched ng-valid"><br>\n\
              {{message}}\n\
              <br />\n\
              <button ng-click="changeMessage()">Change Message</button>\n\
            </div>\n\
          </div>';

        document.getElementById("pen-js").value = '\n\
          var module = angular.module("myModule", []);\n\
          module.controller("myController", function($scope) {\n\
            $scope.message = "Welcome to the WeBy Angular";\n\
            $scope.changeMessage = function() {\n\
              $scope.message = "Hello Universe!";\n\
            };\n\
        });';

      }else if(mode == "jquery"){
        jquery = true;

      }else if(mode == "vu"){
        vu = true;

      }else if(mode == "react"){
        react = true;

      }else{

      }

    }

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
        case "angular":

          SetModeCode("angular");

          break;
        case "jquery":

          SetModeCode("Jquery");

          break;
        case "vu":

          SetModeCode("vu");

          break;
        case "react":

          SetModeCode("react");

          break;
        case "default":

          SetModeCode("default");

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

      


