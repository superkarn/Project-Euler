var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00020 = function () {}
Ratana.Karn.Euler.P00020.prototype.run = function (input) {
    var BigNumber = Ratana.Karn.Euler.Library.BigNumber;
    
    var result = 0;
    
    // calculate input!
    var factorial = new BigNumber(1);
    for (var ii=1; ii<=input; ii++) {
        factorial = BigNumber.multiply(factorial, ii);
    }
    
    // sum the digits
    for (var ii in factorial.Value) {
        result += factorial.Value[ii];
    }
    
    return result;
}

var program = new Ratana.Karn.Euler.P00020();
var result = program.run(100);
console.log(result);
