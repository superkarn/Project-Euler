var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.Library = function () {}



Ratana.Karn.Euler.Library.BigNumber = function (input) {
    var o = this;
    
    // Value stores each digit in an array with the index being the power of 10.
    // e.g. 314,159 is stored as Value = [9,5,1,4,1,3];
    //   9 x 10^0 =       9
    //   5 x 10^1 =      50
    //   1 x 10^2 =     100
    //   4 x 10^3 =   4,000
    //   1 x 10^4 =  10,000
    //   3 x 10^5 = 300,000
    o.Value = [];
    
    // if input is number, convert it to string so we can get each digit
    // then set the values
    if (!isNaN(Number(input))) {
        var inputString = input + "";
        for (var ii = inputString.length - 1; ii >= 0; ii--) {
            o.Value.push(inputString[ii]);
        }
    } 
    // if not, set it to 0
    else {
        o.Value.push(0);
    }
}

with ({
    $: Ratana.Karn.Euler.Library.BigNumber, 
    o: Ratana.Karn.Euler.Library.BigNumber.prototype
}) {
    o.toString = function () {
        var result = "";
        for (var ii = this.Value.length - 1; ii >= 0; ii--) {
            result += this.Value[ii];
        }
        return result;
    },
    
    
    
    // static methods
    $.add = function(a, b) {
        var result = new $();
        
        if (!(a instanceof $)) a = new $(a);
        if (!(b instanceof $)) b = new $(b);

        // loop through all the digits
        var carryOver = 0;
        for (var ii = 0; ii < Math.max(a.Value.length, b.Value.length); ii++) {
            // make sure the current digits are numbers
            var _a = parseInt(a.Value[ii]);
            var _b = parseInt(b.Value[ii]);
            
            // if one number is shorter then the other default its digit to 0
            if (isNaN(_a)) _a = 0;
            if (isNaN(_b)) _b = 0;
            
            // do the actual addition
            result.Value[ii] = _a + _b + carryOver;
            
            // calculate the carry over value
            if (result.Value[ii] > 9) {
                carryOver = Math.floor(result.Value[ii] / 10);
                result.Value[ii] = result.Value[ii] % 10;
            } else {
                carryOver = 0;
            }
        }
        
        // add the last carry over
        if (carryOver > 0) result.Value.push(carryOver);
        
        return result;
    }
}