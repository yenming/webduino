+(function (window, document) {

  'use strict';

  function picture_create(input_id,input_url,input_width,input_height,input_left,input_top,input_zindex,input_display) {

    if (document.getElementById("pic_"+input_id_))
    {
      document.getElementById("pic_"+input_id).src = input_url;
      document.getElementById("pic_"+input_id).style.width = input_width + 'px';
      document.getElementById("pic_"+input_id).style.height = input_height + 'px';
      document.getElementById("pic_"+input_id).style.left = input_left + 'px';
      document.getElementById("pic_"+input_id).style.top = input_top + 'px';
      document.getElementById("pic_"+input_id).style.zindex = input_zindex;
      if (input_display==flase)
        document.getElementById("pic_"+input_id).style.display = "none";
      else
        document.getElementById("pic_"+input_id).style.display = "block";
    }
    else
    {
      var pic = document.createElement('img');
      pic.style.position="absolute";
      pic.id = "pic_"+input_id;
      pic.src = input_url;
      pic.style.width = input_width + 'px';
      pic.style.height = input_height + 'px';
      pic.style.left = input_left + 'px';
      pic.style.top = input_top + 'px';
      pic.style.zindex = input_zindex;
      if (input_display==flase)
        pic.style.display = "none";
      else
        pic.style.display = "block";
      
      document.body.appendChild(pic);
    }
  }
  
  function picture_set(input_id,input_property) {

    if (document.getElementById("pic_"+input_id_))
    {
      if (input_property=='url')
        return document.getElementById("pic_"+input_id).src = input_url;
      esle if (input_property=='width')
        return document.getElementById("pic_"+input_id).style.width = input_width + 'px';
      esle if (input_property=='height')
        return document.getElementById("pic_"+input_id).style.height = input_height + 'px';
      esle if (input_property=='left')
        return document.getElementById("pic_"+input_id).style.left = input_left + 'px';
      esle if (input_property=='top')
        return document.getElementById("pic_"+input_id).style.top = input_top + 'px';
      esle if (input_property=='zindex')
        return document.getElementById("pic_"+input_id).style.zindex = input_zindex;
      esle if (input_property=='display')
      {
        if (input_display==flase)
          document.getElementById("pic_"+input_id).style.display = "none";
        else
          document.getElementById("pic_"+input_id).style.display = "block";
      }
    }

  }    
  
  function picture_get(input_id,input_property) {

    if (document.getElementById("pic_"+input_id_))
    {
      if (input_property=='url')
        return document.getElementById("pic_"+input_id).src;
      esle if (input_property=='width')
        return document.getElementById("pic_"+input_id).style.width;
      esle if (input_property=='height')
        return document.getElementById("pic_"+input_id).style.height;
      esle if (input_property=='left')
        return document.getElementById("pic_"+input_id).style.left;
      esle if (input_property=='top')
        return document.getElementById("pic_"+input_id).style.top;
      esle if (input_property=='zindex')
        return document.getElementById("pic_"+input_id).style.zindex;
      esle if (input_property=='display')
        return document.getElementById("pic_"+input_id).style.display;
    }
    else
      return "";    
  }  
 

  window.picture_create = picture_create;

}(window, window.document));
