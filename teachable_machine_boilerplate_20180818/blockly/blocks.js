Blockly.Blocks['teachable_machine_open'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.OPEN_SHOW);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['teachable_machine_proportion'] = {
  init: function() {
  this.appendDummyInput()  
      .appendField(Blockly.Msg.GET_SHOW);      
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};
