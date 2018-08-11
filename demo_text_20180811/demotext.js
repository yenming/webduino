+(function (window, document) {

  'use strict';

  function createDemoText() {
    if (document.getElementById("demo-area-01-show"))
    {
        var div = document.createElement('div');
        div.id = "demo-area-01-show";
        div.style.zIndex = 999;   
        div.style.display = 'block';
        div.innerHTML = "123";
        document.body.appendChild(div);
    }
  }
  
    var demoText = function (id) {
    if (!id) {
      throw new Error('Missing parameter.');
    }
    if (typeof id !== 'string') {
      throw new Error('Invalid type of parameter.');
    }

    this.blockId = '#' + id;
    this.paragraph = null;

    if ($(this.blockId).length < 1) {
      this.demoWrapper = $('<div/>').addClass('demo').attr('id', id);
      $('#demo-container').append(this.demoWrapper);
      this.paragraph = $('<p/>').appendTo(this.blockId);
    }
  };

  demoText.prototype.setText = function (text) {
    this.paragraph.text(text);
    return this;
  };

  demoText.prototype.appendText = function (text) {
    this.paragraph.append(text);
    return this;
  };

  demoText.prototype.setColor = function (hex) {
    this.paragraph.css('color', hex);
    return this;
  };

  demoText.prototype.setSize = function (size) {
    size = !size ? '' : size += 'px';
    this.paragraph.css('font-size', size);
    return this;
  };

  demoText.prototype.setAlignment = function (alignment) {
    this.paragraph.css('text-align', alignment);
    return this;
  };

  window.demoText = demoText;

  window.createDemoText = createDemoText;

}(window, window.document, window.jQuery));
