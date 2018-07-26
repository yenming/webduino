Blockly.Blocks['picture_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CREATE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW); 
  this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL_SHOW);
  this.appendValueInput("width_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.appendValueInput("height_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.appendValueInput("left_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEFT_SHOW);    
  this.appendValueInput("top_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TOP_SHOW);  
  this.appendValueInput("zindex_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ZINDEX_SHOW);      
  this.appendValueInput("display_")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DISPLAY_SHOW);        
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['picture_set'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")    
      .appendField(Blockly.Msg.SET_SHOW)
      .appendField(Blockly.Msg.ID_SHOW);
  this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .setCheck(null)
      .appendField(new Blockly.FieldDropdown([["url","url"], ["width","width"], ["height","height"], ["left","left"], ["top","top"], ["zindex","zindex"], ["display","display"]]), "property_");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setColour(65);
  }
};

Blockly.Blocks['picture_get'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.GET_SHOW)
      .appendField(new Blockly.FieldDropdown([["url","url"], ["width","width"], ["height","height"], ["left","left"], ["top","top"], ["zindex","zindex"], ["display","display"]]), "property_")
      .appendField(Blockly.Msg.ID_SHOW);  
  this.setOutput(true, null); 
  this.setColour(65);
  }
};

Blockly.Blocks['picture_delete'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DELETE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW); 
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(65);
  }
};
