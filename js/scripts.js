var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("#addForm").submit(function(event){
    event.preventDefault();
    var add1 = parseInt($("#add1").val());
    var add2 = parseInt($("#add2").val());
    var result = add(add1, add2);
    $("#outputAdd").text(result);
  });
  $("#subtractForm").submit(function(event){
    event.preventDefault();
    var subtract1 = parseInt($("#subtract1").val());
    var subtract2 = parseInt($("#subtract2").val());
    var result = subtract(subtract1, subtract2);
    $("#outputSubtract").text(result);
  });
});
