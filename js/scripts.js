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
  $("#multiplyForm").submit(function(event){
    event.preventDefault();
    var multiply1 = parseInt($("#multiply1").val());
    var multiply2 = parseInt($("#multiply2").val());
    var result = multiply(multiply1, multiply2);
    $("#outputMultiply").text(result);
  });
  $("#divideForm").submit(function(event){
    event.preventDefault();
    var divide1 = parseInt($("#divide1").val());
    var divide2 = parseInt($("#divide2").val());
    var result = divide(divide1, divide2);
    $("#outputDivide").text(result);
  });
});
