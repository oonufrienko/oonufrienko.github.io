function mathPow(num, pow) {
    var result = 1;

    for (var i = 1; i <= pow; i++ ) {
        result *= num; 
    }

    return result;
}

var num = +prompt("Введите число, которое будем возводить в степень:", "");
var pow = +prompt("Введите степень, в которую будем возводить число "+num, "");

console.log(mathPow(num, pow));