var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00001 = function () {}
Ratana.Karn.Euler.P00001.prototype.run = function (limit) {
    var result = 0;
    var values = new Array();

    // find multiples of threes
    for (var ii = 3; ii < limit; ii += 3) {
        values.push(ii);
    }

    // find multiples of fives (not already in the list)
    for (var ii = 5; ii < limit; ii += 5) {
        if (values.indexOf(ii) == -1) {
            values.push(ii);
        }
    }

    // sum the values
    for (var ii = 0; ii < values.length; ii++) {
        result += values[ii];
    }

    return result;
}


var program = new Ratana.Karn.Euler.P00001();
var result = program.run(1000);
console.log(result);