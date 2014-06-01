$(document).ready(function(){

  console.log("main.js connected");

  var $formField = $("#tweet_text"),
      $userInput = $("#user-text").text();
      $generatedAppendage = $("#generated-text").text();
      filler = {
        139: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e",
        138: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ",
        137: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
        136: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibu",
        135: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib",
        134: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penati",
        133: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penat",
        122: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pena",
        121: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen",
        120: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pe",
        119: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque p",
        118: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque "
      };

  $formField.on("input", function(e){
    console.log($(this).val());
    $("#user-text").text($(this).val());
    appendText();
  });

  function getCharacterCount(){
    return $formField.val().length;
  };

  function getUserInput(){
    return $formField.val();
  };

  function determineAppropriateLength(){
    return 140 - getCharacterCount();
  };

  function appendText(){
    var stringToAppend = filler[determineAppropriateLength()];
    $("#generated-text").text(stringToAppend || " | fartstore");
  };
}); //document.ready
