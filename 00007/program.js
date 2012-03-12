var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00007 = function () {
    // MaxTries is the number of loops we're willing to try.
    // This is used to prevent the program from running forever
    // if we have a bug.
    this.MaxTries = 200000;
}
Ratana.Karn.Euler.P00007.prototype.isPrime = function (input) {
    // return false if input has at least one factor (not 1 or itself)
    for (var ii = 2; ii <= Math.sqrt(input); ii++) {
        if (input % ii == 0) return false;
    }
    
    // if no factor, it's a prime
    return true;
}
Ratana.Karn.Euler.P00007.prototype.run = function (input) {
    var count = 0;
    
    // start at 2 becaue 1 is not a prime
    for (var ii=2; ii < this.MaxTries; ii++) {
        if (this.isPrime(ii)) {
            //console.log(ii);
            count++;
            
            if (count == input) return ii;
        }
    }

    //console.log('count: '+ count);
    return -1;
}


var program = new Ratana.Karn.Euler.P00007();
var result = program.run(10001);
console.log(result);
