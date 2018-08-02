+(function (window, document) {

  'use strict';

  function createIframe(input_id_,input_url_,input_width_,input_height_,input_left_,input_top_,input_zindex) {
    
    var substr = input_url_.toLowerCase().split('.');
    var extname_av = ".aac,.au,.aif,.aiff,.aiffc,.alac,.ape,.asf,.avi,.cda,.dat,.divx,.flac,.m2ts,.m4a,.mid,.mov,.mp2,.mp3,.mp4,.mpc,.mpg,.mpeg,.mv2,.ogg,.pdf,.ra,.ram,.raw,.rcp,.rm,.rmvb,.snd,.tak,.tta,.vob,.voc,.wma,.wav,.webm,.wmf,.wmv,.wv,.xmi,";
    var extname_flash = ".swf,.flv,";
        
    if (input_url_.toLowerCase().indexOf("http")!=0)
        var src = input_url_;
    else if (extname_av.indexOf("."+substr[substr.length-1]+",")!=-1)
        var src = '<embed src="' + input_url_ + '" style="width:' + input_width_ + 'px;height:' + input_height_ + 'px" autostart="true"></embed>'; 
    else if (extname_flash.indexOf("."+substr[substr.length-1]+",")!=-1)
        var src = '<embed src="' + input_url_ + '" style="width:' + input_width_ + 'px;height:' + input_height_ + 'px" type="application/x-shockwave-flash"></embed>';
    else 
        var src = '<iframe src="' + input_url_ + '" style="width:' + input_width_ + 'px;height:' + input_height_ + 'px" frameborder="0" allow="geolocation; microphone; camera"></iframe>';
    
    if (document.getElementById("fustyles_iframe"+input_id_))
    {
          document.getElementById("fustyles_iframe"+input_id_).style.left = input_left_ + 'px';
          document.getElementById("fustyles_iframe"+input_id_).style.top = input_top_ + 'px';
          document.getElementById("fustyles_iframe"+input_id_).style.zIndex = input_zindex;
          document.getElementById("fustyles_iframe"+input_id_).innerHTML = src;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "fustyles_iframe"+input_id_;
        div.style.position = 'absolute';      
        div.style.left = input_left_ + 'px';
        div.style.top = input_top_ + 'px';
        div.style.zIndex = input_zindex;   
        div.style.display = 'block';
        document.body.appendChild(div);
    }
  }
  
  function deleteIframe(input_id_){
    if (document.getElementById("fustyles_iframe"+input_id_))
      document.getElementById("fustyles_iframe"+input_id_).remove();
  }

  window.createIframe = createIframe;
  window.deleteIframe = deleteIframe;

}(window, window.document));
