+(function (window, document) {

  'use strict';
  
  var proportion = ["", "", ""];

  function teachable_machine_open() {
    var s = document.createElement("script")
    s.type = "text/javascript";
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
