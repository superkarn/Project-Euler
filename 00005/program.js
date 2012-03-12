var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00005 = function () {
    // http://primes.utm.edu/lists/small/10000.txt
    this.Primes = [
2, 3, 5, 7, 11, 13, 17, 19, 23, 29
, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71
, 73, 79, 83, 89, 97];
}
Ratana.Karn.Euler.P00005.prototype.run = function (input) {
    var result = 1;
    
    // this array keeps track the result's prime factors
    var resultPrimeFactors = new Array(input); 
    for (var ii = 0; ii < resultPrimeFactors.length; ii++ ) resultPrimeFactors[ii] = 0;

    
    // find all the common prime factors
    for (var ii = 1; ii <= input; ii++) {
        // get the prime factor of the current number
        var iiPrimeFactors = this.getPrimeFactors(ii);
        
        // add the new prime factor that's not already there
        for (var jj = 0; jj < iiPrimeFactors.length; jj++) {
            if (iiPrimeFactors[jj] > resultPrimeFactors[jj]) {
                resultPrimeFactors[jj] = iiPrimeFactors[jj];
            }
        }
    }
    
    // multiply all the prime factors
    for (var ii = 0; ii < resultPrimeFactors.length; ii++) {
        if (resultPrimeFactors[ii] > 0) {
            result *= Math.pow((ii+1), resultPrimeFactors[ii]);
        }
    }
    
    return result;
}
Ratana.Karn.Euler.P00005.prototype.getPrimeFactors = function (input) {
    // this function returns an array with prime factors of the input
    // e.g. if input is 4, the result is [0, 2, 0, 0]
    // e.g. if input is 6, the result is [0, 1, 1, 0, 1, 0]
    
    var result = new Array(input);
    for (var ii = 0; ii < result.length; ii++ ) result[ii] = 0;
    
    var tmp = input;
    while (tmp > 1) {
        for (var ii = 0; ii < this.Primes.length; ii++) {
            if (tmp % this.Primes[ii] == 0) {
                result[this.Primes[ii]-1]++;
                tmp /= this.Primes[ii];
            }
        }
    }
    
    return result;
}


var program = new Ratana.Karn.Euler.P00005();
var result = program.run(20);
console.log(result);
