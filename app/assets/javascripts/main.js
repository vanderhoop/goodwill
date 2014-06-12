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
        136: " | w that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man fart store takeout maven doglover to",
        135: " | where you are is where you're meant to be, whether you're ready or willing to believe such a thing. If you are taken to the shed and",
        134: " | on top of the newer spaceships you can find a centrally placed antenna meant to transmit directions down to the earthlings below, a",
        133: " | where have all the cowgirls gone, Papa? Where once we had a regular flock of ladyhands, now there's nothing but hypermascullne tag",
        132: " | how can it be that I woke up today with no left foot? I distinctly recall wiggling my toes last night as I read the last chapter ",
        131: " | basketball is less noble now than it was last when last Dr. J graced the court, but of course no one born after 1975 knows anyth",
        130: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. argvark ma darkalarke",
        129: " | if ever there was a time to cry tears of madness, this would be it. All out war across the globe, unruly murder justified by n",
        128: " | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ",
        127: " | Lorem ipsum dolor sit amet, consectetuer omfg i like turtles more than anything omg turtles where can I g #spreadthegoodwill",
        126: " | #sharethelove",
        0: ""
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
    $generatedText = $("#generated-text");
    $generatedText.hide();
    $generatedText.text(stringToAppend).fadeIn();
  };
}); //document.ready
