+(function (window, document) {

  'use strict';

  function teachable_machine_open() {
    if (document.getElementById("train0"))
    {
      document.getElementById("train0").innerHTML = "";
      document.getElementById("train1").innerHTML = "";
      document.getElementById("train2").innerHTML = "";
    }
    else
    {
      var div = document.createElement('div');
      div.style.position = 'absolute';    
      div.style.top = '0px';
      div.style.zIndex = -1;   
      div.style.display = 'block';
      
      div.id = "train0";
      div.innerHTML = "train0";
      div.style.left = '200px';
      document.body.appendChild(div);
      div.id = "train1";
      div.innerHTML = "train1";
      div.style.left = '300px';
      document.body.appendChild(div);
      div.id = "train2";
      div.innerHTML = "train2";
      div.style.left = '400px';
      document.body.appendChild(div);
    }
    
    var s = document.createElement("script")
    s.src = "https://rawgit.com/fustyles/webduino/temp/teachable_machine_boilerplate_20180818/build.js";
    document.getElementsByTagName("head")[0].appendChild(s);
  }
  
  function teachable_machine_proportion(){
    console.log(document.getElementById("train")[0].innerHTML);
    console.log(document.getElementById("train")[1].innerHTML);
    console.log(document.getElementById("train")[2].innerHTML);
  }

  window.teachable_machine_open = teachable_machine_open;
  window.teachable_machine_proportion = teachable_machine_proportion;

}(window, window.document));
