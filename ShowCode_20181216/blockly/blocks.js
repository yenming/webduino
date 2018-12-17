Blockly.Blocks['showcode'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.SHOWCODE_SHOW)
      .appendField(new Blockly.FieldCheckbox("FALSE"), "continued");
  this.setTooltip('');
  this.setColour(20);
  },
  onchange: function (event) {
    if (event.element=="click"&&this.getFieldValue("continued")=="FALSE") {
      if (this.id==event.blockId) {
        var workspace = Blockly.getMainWorkspace('blocklyDiv');
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        console.clear();
        console.log(code);
      }
    } else if (this.getFieldValue("continued")=="TRUE") {
      var workspace = Blockly.getMainWorkspace('blocklyDiv');
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      console.clear();
      console.log(code);
    }
  }
};    
