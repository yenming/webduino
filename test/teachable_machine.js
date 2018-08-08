+(function (window, document) {

  'use strict';

  function teachable_machine_open() {
    if (document.getElementById("train"))
    {
      document.getElementById("train").innerHTML = "";
    }
    else
    {
      var div = document.createElement('div');
      div.id = "train";
      div.style.position = 'absolute';    
      div.style.top = '0px';
      div.style.left = '0px';
      div.style.zIndex = -1;   
      div.style.display = 'none';
      div.innerHTML = "";
      
      document.body.appendChild(div);
    }
    
    var s = document.createElement("script")
    s.src = "https://rawgit.com/fustyles/webduino/temp/teachable_machine_boilerplate_20180818/build.js";
    document.getElementsByTagName("head")[0].appendChild(s);
  }
  
  function teachable_machine_proportion(){
    return document.getElementById("train").innerHTML;
  }

  window.teachable_machine_open = teachable_machine_open;
  window.teachable_machine_proportion = teachable_machine_proportion;

}(window, window.document));
