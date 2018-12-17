// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';

  function ThingSpeak_update(key,field1,field2,field3,field4,field5,field6,field7,field8) {
    
    var input_url ="https://api.thingspeak.com/update";
    var data = $.ajax({
        "type": "POST",
        "dataType": "html",
        "url": input_url,
        "data":{
          "api_key": key,
          "created_at": "DATETIME_STAMP",
          "field1": field1, 
          "field2": field2, 
          "field3": field3, 
          "field4": field4, 
          "field5": field5, 
          "field6": field6, 
          "field7": field7, 
          "field8": field8,
        },
        success: function(html)
        {
          console.log(html);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          //console.log(errorThrown);
        }
     });
  }

  window.ThingSpeak_update = ThingSpeak_update;

}(window, window.document));
