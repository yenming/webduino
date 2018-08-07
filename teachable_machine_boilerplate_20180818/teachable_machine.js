+(function (window, document) {

  'use strict';
  
  var proportion = ["", "", ""];

  function teachable_machine_open() {
        var div = document.createElement('div');
        div.id = "iframe"+input_id_;
        div.style.position = 'absolute';      
        div.style.left = input_left_ + 'px';
        div.style.top = input_top_ + 'px';
        div.style.zIndex = input_zindex_;   
        div.style.display = 'block';
        div.innerHTML = src;
        document.body.appendChild(div);
  }
  
  function teachable_machine_proportion(){
  }

  window.teachable_machine_open = teachable_machine_open;
  window.teachable_machine_proportion = teachable_machine_proportion;

}(window, window.document));
