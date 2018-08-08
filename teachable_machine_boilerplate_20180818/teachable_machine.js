+(function (window, document) {

  'use strict';
  
  //var proportion = ["", "", ""];

  function teachable_machine_open() {
    var s = document.createElement("script")
    s.src = "build.js";
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
