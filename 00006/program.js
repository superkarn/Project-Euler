var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00006 = function () {}
Ratana.Karn.Euler.P00006.prototype.run = function (input) {
    return this.squareOfSum(input) - this.sumOfSquare(input);
}
Ratana.Karn.Euler.P00006.prototype.squareOfSum = function (input) {
    var result = 0;
    for (var ii = 1; ii <= input; ii++) {
        result += ii;
    }
    result = result * result;
    //console.log("squareOfSum = "+ result);
    return result;
}
Ratana.Karn.Euler.P00006.prototype.sumOfSquare = function (input) {
    var result = 0;
    for (var ii = 1; ii <= input; ii++) {
        result += ii * ii;
    }
    //console.log("sumOfSquare = "+ result);
    return result;
}


var program = new Ratana.Karn.Euler.P00006();
var result = program.run(100);
console.log(result);
