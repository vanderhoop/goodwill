$(document).ready(function(){

  console.log("main.js connected");

  var $formField = $("#tweet_text"),
      $userInput = $("#user-text").text();
      $generatedAppendage = $("#generated-text").text();
      filler = {
        140: "",
        139: " | You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for ",
        138: " | murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that se",
        137: " | ven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the sno",
        136: " | w that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
        135: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib",
        134: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penati",
        133: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penat",
        122: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pena",
        121: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pen",
        120: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque pe",
        119: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque p",
        118: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque "
      };


  $("#user-text").on('onkeydown', function(){
    console.log("proven");
  });

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
    $generatedText = $("#generated-text");
    $generatedText.hide();
    $generatedText.text(stringToAppend || " | fartstore").fadeIn();
  };
}); //document.ready
