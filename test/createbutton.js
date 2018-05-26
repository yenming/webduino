+(function (window, document) {

  'use strict';

  function createElement() {
    
    if (document.getElementById('fustyles'))
    {
          //
    }
    else
    {
        var div = document.createElement('div');
        div.id = 'demo-area-01-show';
        document.body.appendChild(div);

        var list = document.getElementsByClassName("db5");
         for(var i = list.length - 1; 0 <= i; i--)
         if(list[i] && list[i].parentElement)
         list[i].parentElement.removeChild(list[i]);

        var divHtml="<table><tr><td></td><td><button id='demo-area-05-btn1' class='db5'>按鈕 1</button></td><td></td></tr><tr><td><button id='demo-area-05-btn2' class='db5'>按鈕 2</button></td><td><button id='demo-area-05-btn3' class='db5'>按鈕 3</button></td><td><button id='demo-area-05-btn4' class='db5'>按鈕 4</button></td></tr><tr><td></td><td><button id='demo-area-05-btn5' class='db5'>按鈕 5</button></td><td></td></tr></table>";

        var div = document.createElement('div');
        div.id = 'fustyles';
        div.style.position = 'absolute';      
        div.style.left = '50px';
        div.style.top = '100px';
        div.style.zindex='9999';      
        div.innerHTML = divHtml;
        document.body.appendChild(div);
    }
  }

  window.createElement = createElement;

}(window, window.document));
