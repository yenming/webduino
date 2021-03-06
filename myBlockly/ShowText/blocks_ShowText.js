﻿Blockly.Blocks['showtext'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SHOWTEXT_SHOW);  
  this.appendValueInput("size")
      .setCheck("Number")
      .appendField(Blockly.Msg.SHOWTEXT_SIZE_SHOW); 
  this.appendValueInput("color")
      .appendField(Blockly.Msg.SHOWTEXT_COLOR_SHOW); 
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.SHOWTEXT_TEXT_SHOW);   
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(90);
  }
};

Blockly.Blocks['linebreak'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.LINEBREAK_SHOW);  
  this.setOutput(true, null); 
  this.setColour(90);
  }
};

Blockly.Blocks['comment'] = {
  init: function() {
  this.appendValueInput("text")
      .setCheck(null)
      .appendField(Blockly.Msg.COMMENT_SHOW); 
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  }
};
