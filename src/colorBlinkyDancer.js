var ColorBlinkyDancer = function(top, left, timeBetweenSteps, color) {
  // debugger;
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.color = '#' + color;

  this.setColor();
};

ColorBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
ColorBlinkyDancer.prototype.constructor = ColorBlinkyDancer;

ColorBlinkyDancer.prototype.setColor = function() {
  this.$node.css({ "border-color": this.color});
};

