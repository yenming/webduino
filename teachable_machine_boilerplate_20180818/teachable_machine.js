+(function (window, document) {

  'use strict';

  function teachable_machine_open() {
    if (document.getElementById("train"))
    {
      document.getElementById("train")[0].innerHTML = "";
      document.getElementById("train")[1].innerHTML = "";
      document.getElementById("train")[2].innerHTML = "";
    }
    else
    {
      var div = document.createElement('div');
      div.id = "train";
      div.style.position = 'absolute';      
      div.style.left = '-500px';
      div.style.top = '500px';
      div.style.zIndex = -1;   
      div.style.display = 'none';
      div.innerHTML = "";
      document.body.appendChild(div);
      document.body.appendChild(div);
      document.body.appendChild(div);
    }
    
    var s = document.createElement("script")
    s.src = "https://rawgit.com/fustyles/webduino/temp/teachable_machine_boilerplate_20180818/build.js";
    document.getElementsByTagName("head")[0].appendChild(s);
  }
  
  function teachable_machine_proportion(){
    console.log(proportion[0]);
    console.log(proportion[1]);
    console.log(proportion[2]);
  }

  window.teachable_machine_open = teachable_machine_open;
  window.teachable_machine_proportion = teachable_machine_proportion;

}(window, window.document));
