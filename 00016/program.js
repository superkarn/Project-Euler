var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00016 = function () {}
Ratana.Karn.Euler.P00016.prototype.run = function (input) {
    var BigNumber = Ratana.Karn.Euler.Library.BigNumber;
    
    var result = 0;
    
    // calculate 2^input (there's a better way to calculate this)
    var powerOf2 = new BigNumber(1);
    for (var ii=1; ii<=input; ii++) {
        powerOf2 = BigNumber.multiply(powerOf2, "2");
    }

    // sum the digits
    for (var ii in powerOf2.Value) {
        result += powerOf2.Value[ii];
    }
    
    return result;
}

var program = new Ratana.Karn.Euler.P00016();
var result = program.run(1000);
console.log(result);
