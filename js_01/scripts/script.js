function mathPow(num, pow) {
  var result = 1;

  for (var i = 1; i <= pow; i++) {
      result *= num; 
  }

  return result;
}

var num = +prompt("Введите число, которое будем возводить в степень:", "");
var pow = +prompt("Введите степень, в которую будем возводить число " + num, "");

if ((num !== 0) && (pow !== 0)) {
  console.log( mathPow(num, pow) );
} else {
  console.log("Sorry, you haven't entered anything. Try againg after refresh the page");
}
