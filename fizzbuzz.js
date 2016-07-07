// SUM THE FIZZBUZZ INTEGERS (MULTIPLES OF 3 AND 5) BETWEEN 0 AND X

var tests = [
    {in: 0, out: 0},
    {in: 3, out: 3},
    {in: 5, out: 8},
    {in: 6, out: 14},
    {in: 15, out: 60},
    {in: 100, out: 2418},
    {in: 1000, out: 234168},
    {in: 10000, out: 23341668}
];

var iterations = 10000;
var itSum = 0.0;
for (var i=0; i<iterations; i++) {
    var t0 = performance.now();
    for (var t = 0, tlen = tests.length, out = 0; t < tlen; t++) {
        // console.log('In: ' + tests[t].in);
        // out = sumTo(tests[t].in);  // bilooper
        out = quickSum(tests[t].in);  // high maths, 17x faster!
        // console.log('Out: ' + out + ' ' + (out === tests[t].out ? 'correct' : 'INCORRECT'));
    }
    var t1 = performance.now();
    itSum += (t1 - t0);
}
console.log(iterations, 'iterations', (itSum/iterations).toFixed(5), 'milliseconds on average');

// two loops
function sumTo(max) {
    var sum = 0;
    // add all multiples of 3
    for (var threes = 3; threes <= max; threes += 3) {
        sum += threes;
    }
    // add all multiples of 5, except multiples of 3
    for (var fives = 5; fives <= max; fives += 5) {
        if (fives % 3 > 0) {
            sum += fives;
        }
    }
    return sum;
}

function getFactorSum(x, mult) {
    var n = Math.floor(x/mult);
    return n * (n + 1) / 2 * mult;
}

function quickSum(max) {
    return getFactorSum(max, 3) + getFactorSum(max, 5) - getFactorSum(max, 15);
}
