var Ratana = {};
Ratana.Karn = {};
Ratana.Karn.Euler = {};
Ratana.Karn.Euler.P00002 = function () {
    this.Limit = 0;
    this.Result = 0;
    this.Values = {};
}
Ratana.Karn.Euler.P00002.prototype.run = function () {
    // make sure we've set the limit
    if (this.Limit < 1) return 0;

    // this is the n-th fibonacci to try
    var n = 1;
    while (this.Result < this.Limit) {
        this.fibonnaci(n++);
    }
    return this.Result;
}
Ratana.Karn.Euler.P00002.prototype.fibonnaci = function (n) {
    // if we've already calculated this value, return it
    if (typeof this.Values[n] !== "undefined") return this.Values[n];
    
    // if we've hit the minimum value, return 1
    if (n < 2) {
        this.Values[n] = 1;
        return 1;
    }

    // calculate the n-2 and n-1
    var n1 = this.fibonnaci(n - 1);
    var n2 = this.fibonnaci(n - 2);

    // if > limit then set to 0
    var result = 0;
    if (n1 > this.Limit || n2 > this.Limit) result = 0;
    else result = n1 + n2;

    // if even then add to Result
    if (result % 2 == 0) this.Result += result;

    // store the value so we don't have to recalculate it
    this.Values[n] = result;

    return result;
}



var program = new Ratana.Karn.Euler.P00002();
program.Limit = 4000000;
var result = program.run();
console.log(result);
