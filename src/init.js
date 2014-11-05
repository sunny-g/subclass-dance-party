$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      Math.floor(Math.random()*16777215).toString(16) // creates random color
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $(".lineUp").on("click", function() {

    window.pariah.$node.css({
      border: '0px'
    });
    delete window.pariah;

    window.dancers.forEach(function(dancer) {
      // dancer.$node.stop(true, true);
      dancer.$node.animate({  // changes the view
        left: "-=" + (dancer.left - 20)
      }, 3000);
      dancer.left = 20; // changes the model
      dancer.$node.stop(true, true);
    });

  });

  $("body").on("mouseover", '.charImage', function() {
    $(this).animate({
      height: "150px",
      width: "150px"
  }, 2000);
  });

  $('.change').on('click', function(){

    if (window.pariah) {
      window.pariah.$node.css({
        border: '0px'
      });
    }
    window.pariah = window.dancers[Math.floor(Math.random() * window.dancers.length)];
    console.log(window.pariah);
    window.pariah.$node.css({
      border: '10px solid red'
    });

  });


});

