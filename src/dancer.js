var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.setPosition();
  this.step();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.step is a method at some place
  // whose class it belongs to is decided by the 'this' within bind
  // when the Dancer.step.call() is invoked, this.step becomes the step func of the invoking context

};

Dancer.prototype.setPosition = function(){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};


