var Ratana = {};
Ratana.Karn = {};
Ratana.Karn.Euler = {};
Ratana.Karn.Euler.P00010 = function () {}
Ratana.Karn.Euler.P00010.prototype.isPrime = function (input) {
    // copied from P00007
    // return false if input has at least one factor (not 1 or itself)
    for (var ii = 2; ii <= Math.sqrt(input); ii++) {
        if (input % ii == 0) return false;
    }
    
    // if no factor, it's a prime
    return true;
}
Ratana.Karn.Euler.P00010.prototype.run = function (input) {
    var result = 0;
    
    for (var ii = 2; ii <= input; ii++) {
        if (this.isPrime(ii)) result += ii;
    }
    return result;
}


var program = new Ratana.Karn.Euler.P00010();
var result = program.run(2000000);
console.log(result);
