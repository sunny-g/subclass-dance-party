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

  var distanceCheck = function(threshold){
    // returns true if this dancer is close to the pariah
    if (!window.pariah) {
      return false;
    }
    var topDiff = this.top - window.pariah.top;
    var leftDiff = this.left - window.pariah.left;
    var tooClose = Math.abs(topDiff) < threshold || Math.abs(leftDiff) < threshold;

    return [topDiff, leftDiff, tooClose];
  };

  var diffs = distanceCheck(100);
  console.log(diffs);

  if (!diffs[2]) {
    // if we're not too close
    if (this.top % 2 === 0) {
      this.top += Math.round(Math.random() * 25);
    } else {
      this.top -= Math.round(Math.random() * 25);
    }
    if (this.left % 2 === 0) {
      this.left += Math.round(Math.random() * 25);
    } else {
      this.left -= Math.round(Math.random() * 25);
    }
  } else {
    // if we're too close to the pariah
    // console.log(topDiff, leftDiff);
    var topDiff = diffs[0];
    var leftDiff = diffs[1];

    if (topDiff < 0) {
      this.top -= 500;
    } else {
      this.top += 500;
    }
    if (leftDiff < 0) {
      this.left -= 500;
    } else {
      this.left += 500;
    }
  }


  this.$node.animate({
    top: this.top,
    left: this.left
  }, 1000);
};
