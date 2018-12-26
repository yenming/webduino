Blockly.JavaScript['iframe_open'] = function (block) {
  var value_openid_ = Blockly.JavaScript.valueToCode(block, 'openid_', Blockly.JavaScript.ORDER_ATOMIC);  
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zindex_ = Blockly.JavaScript.valueToCode(block, 'zindex_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'openURL(' + value_openid_ + ',' + value_url_ + ','+ value_width_ + ',' + value_height_ + ',' + value_left_ + ',' + value_top_ + ',' + value_zindex_ + ');\n';
  return code;
};

Blockly.JavaScript['iframe_close'] = function(block) {
  var value_closeid_ = Blockly.JavaScript.valueToCode(block, 'closeid_', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'closeURL(' + value_closeid_ + ');\n';
  return code;
};
