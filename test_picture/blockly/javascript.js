Blockly.JavaScript['picture_create'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'picture_create(' + value_id_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ',' + value_display_ + ');';
  return code;
};

Blockly.JavaScript['picture_url'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'picture_url(' + value_id_ + ',' + value_url_ + ');';
  return code;
};

Blockly.JavaScript['picture_width'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'picture_width(' + value_id_ + ','+ value_width_ + ');';
  return code;
};

Blockly.JavaScript['picture_height'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'picture_height(' + value_id_ + ',' + value_height_ + ');';
  return code;
};

Blockly.JavaScript['picture_left'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'picture_left(' + value_id_ + ',' + value_left_ + ');';
  return code;
};

Blockly.JavaScript['picture_top'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'picture_top(' + value_id_ + ',' + value_top_ + ');';
  return code;
};

Blockly.JavaScript['picture_zindex'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);   
  var code = 'picture_zindex(' + value_id_ + ',' + value_zindex_ + ');';
  return code;
};

Blockly.JavaScript['picture_display'] = function (block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);    
  var value_display_ = Blockly.JavaScript.valueToCode(block, 'display_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'picture_display(' + value_id_ + ',' + value_display_ + ');';
  return code;
};

Blockly.JavaScript['picture_delete'] = function(block) {
  var value_id_ = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'picture_delete(' + value_id_ + ');';
  return code;
};
