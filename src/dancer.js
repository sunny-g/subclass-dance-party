var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = Math.round(top);
  this.left = Math.round(left);

  this.setPosition();
  this.step();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.step is a method at some place
  // whose class it belongs to is decided by the 'this' within bind
  // when the Dancer.step.call() is invoked, this.step becomes the step func of the invoking context
  //
  this.shuffle();
};

Dancer.prototype.setPosition = function(){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.shuffle = function(){
  if (this.top % 2 === 0) {
    this.top+= Math.round(Math.random() * 25);
  }
  else {
    this.top-= Math.round(Math.random() * 25);
  }
  if (this.left % 2 === 0) {
    this.left += Math.round(Math.random() * 25);
  } else {
    this.left -= Math.round(Math.random() * 25);
  }

  this.$node.animate({
    top: this.top,
    left: this.left
  }, 1000);
};
