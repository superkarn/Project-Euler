var Ratana = {};
Ratana.Karn = {};
Ratana.Karn.Euler = {};
Ratana.Karn.Euler.P00004 = function () {}
Ratana.Karn.Euler.P00004.prototype.run = function () {
    var result = 0;
    
    // threshholds limit to only 3-digit numbers
    var threshhold1 = 99;
    var threshhold2 = 999;
    
    var n1 = threshhold2;
    var n2 = threshhold2;
    
    // calculating backward from 999;
    // we can improve this by cutting the step short
    // once we find the largest palindrome.
    // no need to calculate the smaller numbers
    var counter = 0;
    while (counter < (threshhold2 - threshhold1)) { 
        var i2 = threshhold2 - counter;
        for (var i1 = threshhold2; i1 >= i2; i1--) {
            var tmp = i1 * i2;
            if (this.isPalindrome(tmp)) {
                if (tmp > result) result = tmp;
            }
        }        
        counter++;
    }
    return result;
}
Ratana.Karn.Euler.P00004.prototype.isPalindrome = function (input) {
    input = input + '';
    for (var ii = 0; ii < input.length / 2; ii++) {
        if (input[ii] != input[input.length-1-ii]) return false;
    }
    return true;
}


var program = new Ratana.Karn.Euler.P00004();
var result = program.run();
console.log(result);
