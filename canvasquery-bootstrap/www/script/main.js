
var app = playground({
	mx : 0,
  create: function() {
    
  },

  ready: function() {
	  
  },

  step: function(delta) {
	this.mx++;
  },

  render: function(delta) {
    this.layer.clear("#008");
    this.layer.fillStyle("#fff").font("64px Arial").fillText("Hello World!", 32, 64);
	this.layer.fillText("Hi!", this.mx,120);
  },

  mousedown: function(event) {

  },

  mouseup: function(event) {

  },

  mousemove: function(event) {
	this.mx = event.x;
	//this.render(event);
  },

  keydown: function(event) {

  },

  keyup: function(event) {

  },
  
  resize: function(event) {
	  this.render(event);
  }

});
