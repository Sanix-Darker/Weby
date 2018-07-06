/*
*	function.js
*	Collection of functions of the projects
*/

/**
 * remove(id)
 * Remove element in the output
 * @param  {[id]}
 * @return {[type]}
 */
function remove(id) {
    var victim = document.getElementById(id);
    if (victim) {
      victim.parentNode.removeChild(victim);
    }
  }

/**
 * emptyAll()
 * To Empty HTML, CSS, JS fields
 * @return {[type]}
 */
  function emptyAll(){
    html.value="", css.value="", js.value="";
  }

/**
 * updateOutput()
 * To refresh the output
 * @return {[type]}
 */
  function updateOutput() {

  	if((html.value!="" && html.value!=last_html && html.value.length>0) || (css.value!="" && css.value.length>0) || (js.value!="" && js.value!=last_js && js.value.length>0)){
  		// clean up
	    remove("pen-style");
	    remove("pen-script");
  	}
    
    // add HTML
    if(html.value!="" && html.value!=last_html && html.value.length>0){ // We change the Html content untill it content some thing
      output.innerHTML = html.value;
      last_html = html.value;
    }
    
    // add CSS
    if(css.value!="" && css.value.length>0){
      var style = document.createElement("style");
      style.id = "pen-style";
      style.innerHTML = css.value.replace(" *","#output *").replace("html","#output").replace("body","#output");
      last_css = css.value.replace(" *","#output *");
      document.head.appendChild(style);
    }
    
    if(angular == true){

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/angular.js";
      document.body.appendChild(script);
    
    }else if(jquery == true){

    }else if(vu == true){
      
    }else if(react == true){
      
    }else{
      
    }
    console.log(angular);

    // add JS
    if(js.value!="" && js.value!=last_js && js.value.length>0){
      var script = document.createElement("script");
      script.id = "pen-script";
      // TO manage if all the document die or is affected
      if((js.value).includes("document.write") || (js.value).includes("window.write")){

        advice = '<a href="" style="color:red;font-weight:bold;"> << Back to the simulator / Retour au simulateur</a>';
        script.innerHTML = js.value.replace("')","").replace('")','').replace('("',"('")+" <br> "+advice+ "')";
      
      }else
        script.innerHTML = js.value;

      last_js = js.value;
      document.body.appendChild(script);
    } 
    
  }


/**
 * ReadProject
 * Open a Weby JSON project
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
        html.value= content.html.replace("~w~", /[\r\n]/g)
        css.value= content.css.replace("~w~", /[\r\n]/g)
        js.value= content.js.replace("~w~", /[\r\n]/g)
        updateOutput();
      }else{
        problem = true;
        output.innerHTML = "<center><br><br><br><br><h4> There is a problem loading your project! </h4></center>";
      }

    } 
    fileReader.readAsText(file_R);
  }


/**
 * saveProject()
 * Save the project with a personnal name
 * @return {[type]}
 */
	function saveProject(){
	  var projectName = prompt("Please enter your project name", "My project");
	  var link = document.getElementById('linkydoo')
	  if (projectName != null) {

	      projectName.replace(".","_");
	      var project_content = '{'+ // Do the join here
	                                '"html": "'+html.value.replace(/[\r\n]/g, "~w~").replace('"','\"')+'",'+
	                                '"css": "'+css.value.replace(/[\r\n]/g, "~w~").replace('"','\"')+'",'+
	                                '"js": "'+js.value.replace(/[\r\n]/g, "~w~").replace('"','\"')+'"'+
	                            '}';

	     //Save the file contents as a script
	     var dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(project_content);

	     //Write it as the href for the link
	     link.download=(projectName+".json");
	     link.href = dataUri;
	     link.click();

	  }else{
	    alert("If you want to save your project, enter a name.");
	  }
	}

/**
 * enableTab(el)
 * Enable tab key in the text area
 * @param  {[el: textarea Object]}
 * @return {[type]}
 */

function enableTab(el) {
    el.onkeydown = function(e) {
        if (e.keyCode === 9) { // tab was pressed

            // get caret position/selection
            var val = this.value,
                start = this.selectionStart,
                end = this.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            this.value = val.substring(0, start) + '\t' + val.substring(end);

            // put caret at right position again
            this.selectionStart = this.selectionEnd = start + 1;

            // prevent the focus lose
            return false;

        }
    };
}

  /**
   * isJson(str)
   * To verify if a file is a JSON or not
   * @param  {[type]}
   * @return {Boolean}
   */
  function isJson(str) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }

  /**
   * close_window
   * Just to ask again about closing the tab
   * @return {[type]}
   */
  function close_window() {
    if (confirm("Do you want to close WeBy?")) {
      close();
    }
  }