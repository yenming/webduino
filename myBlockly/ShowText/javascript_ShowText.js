Blockly.JavaScript['showtext'] = function (block) {
  var size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  size = "'"+size+"px'";
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'document.getElementById("showText").style.fontSize='+size+';document.getElementById("showText").style.color='+color+';\ndocument.getElementById("showText").innerHTML = '+ text +';\n';
  return code;
};