var Ratana = {};
Ratana.Karn = {};
Ratana.Karn.Euler = {};
Ratana.Karn.Euler.P00012 = function () {
    this.CurrentTriangleNumber = 0;
    this.CurrentTrianglePosition = 0;
    
    // MaxTries is the number of loops we're willing to try.
    // This is used to prevent the program from running forever
    // if we have a bug.
    this.MaxTries = 100000;
}
Ratana.Karn.Euler.P00012.prototype.GetNextTriangleNumber = function () {
    // Triangle Number sequence = 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
    // i-th number = 1 + 2 + 3 + ... + i
    this.CurrentTriangleNumber += ++this.CurrentTrianglePosition;
}
Ratana.Karn.Euler.P00012.prototype.GetNumberOfFactors = function (input) {
    var result = 2; // count 1 and itself
    
    // we only need to check up to the squareroot of input
    // so we count each match twice; 
    // once for the value < sqrt and once for the value > sqrt
    for (var ii = 2; ii < Math.sqrt(input) ; ii++) {
        if (input % ii == 0) result += 2;
    }
    
    return result;
}
Ratana.Karn.Euler.P00012.prototype.run = function (numberOfFactors) {
    for (var ii = 0; ii < this.MaxTries; ii++) {
        this.GetNextTriangleNumber();
        var numOfFactors = this.GetNumberOfFactors(this.CurrentTriangleNumber);
        
        //console.log(this.CurrentTriangleNumber +' -> '+ numOfFactors);
        if (numOfFactors > numberOfFactors) {
            return this.CurrentTriangleNumber;
        }
    }
    
    return -1;
}

var program = new Ratana.Karn.Euler.P00012();
var result = program.run(500);
console.log(result);
