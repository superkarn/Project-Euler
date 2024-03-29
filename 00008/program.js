var Ratana = Ratana || {};
Ratana.Karn = Ratana.Karn || {};
Ratana.Karn.Euler = Ratana.Karn.Euler || {};
Ratana.Karn.Euler.P00008 = function () {}
Ratana.Karn.Euler.P00008.prototype.run = function (input) {
    // length: the number of consecutive numbers to search for
    // input: the input string to search through
    
    // __NOTE__
    // This algorithm finds the greatest product of 5 consecutive 
    // DIGITs in the [input] (what the problem asks for).
    
    var result = 0; // product of 5 consecutive numbers
    for (var ii = 1; ii < input.length-5; ii++) {
        var product = input[ii] *
                      input[ii+1] *
                      input[ii+2] *
                      input[ii+3] *
                      input[ii+4];
        
        if (product > result) result = product;
    }
    
    return result;
}
Ratana.Karn.Euler.P00008.prototype.run2 = function (length, input) {
    // length: the number of consecutive numbers to search for
    // input: the input string to search through
    
    // __NOTE__
    // This algorithm finds the greatest product of 5 consecutive 
    // NUMBERs in the [input] instead of 5 consecutive DIGITs.
    
    var result = 0; // product of 5 consecutive numbers
    for (var start = 1; start < 1000; start++) {
        var searchString = '';
        for (var ii = start; ii < start + length; ii++) {
            searchString += ii;
        }
        
        if (input.indexOf(searchString) > -1) {
            // get the production
            var product = 1;
            for (var ii = start; ii < start + length; ii++) {
                product *= ii;
            }
            
            // check to to see if greater than what we have
            //console.log('product ('+ searchString +') = '+ product);
            if (product > result) result = product;
        }
    }
    
    return result;
}


var program = new Ratana.Karn.Euler.P00008();
//var result = program.run(5, '11111212223242511111891011121311111');
var result = program.run('7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450');
console.log(result);
