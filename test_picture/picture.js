+(function (window, document) {

  'use strict';

  function picture_create(input_id,input_url,input_width,input_height,input_left,input_top,input_zindex,input_display) {

    if (document.getElementById("pic_"+input_id))
    {
      document.getElementById("pic_"+input_id).src = input_url;
      document.getElementById("pic_"+input_id).style.width = input_width + 'px';
      document.getElementById("pic_"+input_id).style.height = input_height + 'px';
      document.getElementById("pic_"+input_id).style.left = input_left + 'px';
      document.getElementById("pic_"+input_id).style.top = input_top + 'px';
      document.getElementById("pic_"+input_id).style.zindex = input_zindex;
      if (input_display==false)
        document.getElementById("pic_"+input_id).style.display = "none";
      else
        document.getElementById("pic_"+input_id).style.display = "block";
    }
    else
    {
      var pic = document.createElement('img');
      pic.style.position = "absolute";
      pic.id = "pic_"+input_id;
      pic.src = input_url;
      pic.style.width = input_width + 'px';
      pic.style.height = input_height + 'px';
      pic.style.left = input_left + 'px';
      pic.style.top = input_top + 'px';
      pic.style.zindex = input_zindex;
      if (input_display==false)
        pic.style.display = "none";
      else
        pic.style.display = "block";
      
      document.body.appendChild(pic);
    }
  }
  
  function picture_set(input_id,input_property,input_value) {

    if (document.getElementById("pic_"+input_id))
    {
      if (input_property=='url')
        document.getElementById("pic_"+input_id).src = input_value;
      else if (input_property=='width')
        document.getElementById("pic_"+input_id).style.width = input_value + 'px';
      else if (input_property=='height')
        document.getElementById("pic_"+input_id).style.height = input_value + 'px';
      else if (input_property=='left')
        document.getElementById("pic_"+input_id).style.left = input_value + 'px';
      else if (input_property=='top')
        document.getElementById("pic_"+input_id).style.top = input_value + 'px';
      else if (input_property=='zindex')
        document.getElementById("pic_"+input_id).style.zindex = input_value;
      else if (input_property=='display')
      {
        if (input_value==false)
          document.getElementById("pic_"+input_id).style.display = "none";
        else
          document.getElementById("pic_"+input_id).style.display = "block";
      }
    }
  }    
  
  function picture_get(input_id,input_property) {

    if (document.getElementById("pic_"+input_id))
    {
      if (input_property=='url')
        return document.getElementById("pic_"+input_id).src;
      else if (input_property=='width')
        return document.getElementById("pic_"+input_id).style.width;
      else if (input_property=='height')
        return document.getElementById("pic_"+input_id).style.height;
      else if (input_property=='left')
        return document.getElementById("pic_"+input_id).style.left;
      else if (input_property=='top')
        return document.getElementById("pic_"+input_id).style.top;
      else if (input_property=='zindex')
        return document.getElementById("pic_"+input_id).style.zindex;
      else if (input_property=='display')
        return document.getElementById("pic_"+input_id).style.display;
    }
    else
      return "";    
  }  
 

  window.picture_create = picture_create;

}(window, window.document));
