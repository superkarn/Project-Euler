var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.Library = function () {}



Ratana.Karn.Euler.Library.BigNumber = function (input, base) {
    // base of the number
    // e.g. 2 = binary, 10 = decimal
    this.Base = typeof base !== 'undefined' ? base : 10;

    
    // Value stores each digit in an array with the index being the power of 10.
    // e.g. 314,159 is stored as Value = [9,5,1,4,1,3];
    //   9 x 10^0 =       9
    //   5 x 10^1 =      50
    //   1 x 10^2 =     100
    //   4 x 10^3 =   4,000
    //   1 x 10^4 =  10,000
    //   3 x 10^5 = 300,000
    this.Value = [];
    
    // if input is number, convert it to string so we can get each digit
    // then set the values
    if (!isNaN(Number(input))) {
        var inputString = input + "";
        for (var ii = inputString.length - 1; ii >= 0; ii--) {
            this.Value.push(parseInt(inputString[ii]));
        }
    } 
    // if not, set it to 0
    else {
        this.Value.push(0);
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

        // make sure the bases match
        if (a.Base != b.Base) throw "Bases of the numbers do not match.";
        
        // loop through all the digits
        var carryOver = 0;
        for (var ii = 0; ii < Math.max(a.Value.length, b.Value.length); ii++) {
            // if one number is shorter then the other default its digit to 0
            var aii = isNaN(a.Value[ii]) ? 0 : a.Value[ii];
            var bii = isNaN(b.Value[ii]) ? 0 : b.Value[ii];
            
            // do the actual addition
            result.Value[ii] = aii +  bii + carryOver;
            
            // calculate the carry over value
            if (result.Value[ii] >= a.Base) {
                carryOver = Math.floor(result.Value[ii] / a.Base);
                result.Value[ii] = result.Value[ii] % a.Base;
            } else {
                carryOver = 0;
            }
        }
        
        // add the last carry over
        if (carryOver > 0) result.Value.push(carryOver);
        
        return result;
    }
    
    $.multiply = function(a, b) {
        var result = new $();
        
        if (!(a instanceof $)) a = new $(a);
        if (!(b instanceof $)) b = new $(b);

        // make sure the bases match
        if (a.Base != b.Base) throw "Bases of the numbers do not match.";
        
        var products = [];
        for (var ii in a.Value) {
            // each position for a goes up by 1 order of magnitude
            var magnitude = Math.pow(a.Base, ii);
            
            var tempProduct = new $();
            var carryOver = 0;
            for (var jj in b.Value) {
                // if one number is shorter then the other default its digit to 0
                var aii = isNaN(a.Value[ii]) ? 0 : a.Value[ii];
                var bjj = isNaN(b.Value[jj]) ? 0 : b.Value[jj];
                
                tempProduct.Value[jj] = ((aii * magnitude) *  bjj) + carryOver;
                
                
                if (tempProduct.Value[jj] >= magnitude) {
                    carryOver = Math.floor(tempProduct.Value[jj] / a.Base);
                    tempProduct.Value[jj] = tempProduct.Value[jj] % a.Base;
                } else {
                    carryOver = 0;
                }
            }
            
            // add the last carry over
            if (carryOver > 0) tempProduct.Value.push(carryOver);
            
            products.push(tempProduct);
        }
        
        // add all the products to get the result
        for (var ii in products) {
            result = $.add(result, products[ii]);
        }
        
        return result;
    }
}
