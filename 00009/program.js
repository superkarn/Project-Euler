var Ratana = {};
Ratana.Karn = {};
Ratana.Karn.Euler = {};
Ratana.Karn.Euler.P00009 = function () {}
Ratana.Karn.Euler.P00009.prototype.run = function (input) {
    // return a * b * c
    // where
    //   a < b < c
    //   a + b + c = input
    //   a^2 + b^2 = c^2

    for (var a = 1; a < input - 2; a++) {
        for (var b = a + 1; b < input - 1; b++) {
            for (var c = b + 1; c < input; c++) {
                if (a + b + c == input &&
                    Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
                    return a * b * c;
                }
            }
        }
    }
    
    return -1;
}


var program = new Ratana.Karn.Euler.P00009();
var result = program.run(1000);
console.log(result);
