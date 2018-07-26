","picture_width","picture_height","picture_left","picture_top","picture_zindex","picture_display","picture_hide","picture_delete

Blockly.Blocks['picture_create'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CREATE_SHOW);
      .appendField(Blockly.Msg.ID_SHOW)    
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
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['picture_width'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW);
  this.appendValueInput("width_")
      .setCheck("Number")
      .appendField(Blockly.Msg.WIDTH_SHOW);
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['picture_height'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW);
      .appendField(Blockly.Msg.ID_SHOW)    
  this.appendValueInput("height_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HEIGHT_SHOW);
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['picture_left'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW);
      .appendField(Blockly.Msg.ID_SHOW)    
  this.appendValueInput("left_")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEFT_SHOW);
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['picture_top'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW);
      .appendField(Blockly.Msg.ID_SHOW)    
  this.appendValueInput("top_")
      .setCheck("Number")
      .appendField(Blockly.Msg.TOP_SHOW);
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['picture_zindex'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW)
      .appendField(Blockly.Msg.ID_SHOW);
  this.appendValueInput("zindex_")
      .setCheck("Boolean")
      .appendField(Blockly.Msg.ZINDEX_SHOW);
  this.setInputsInline(true);    
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};

Blockly.Blocks['picture_display'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW);
      .appendField(Blockly.Msg.ID_SHOW)    
  this.appendValueInput("display_")
      .setCheck("Boolean")
      .appendField(Blockly.Msg.DISPLAY_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
  this.setColour(65);
  }
};


Blockly.Blocks['picture_hide'] = {
  init: function() {
  this.appendValueInput("id_")
      .setCheck("Number")
      .appendField(Blockly.Msg.PICTURE_SHOW);
      .appendField(Blockly.Msg.ID_SHOW)    
  this.appendValueInput("hide_")
      .setCheck("Number")
      .appendField(Blockly.Msg.HIDE_SHOW);
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setTooltip('');
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
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
