const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 106.58 yens", function(){
    expect(fromDollarToYen(1)).toBe(106.58);
});

test("One yen should be 0.006 GBP", function(){
    expect(fromYanToPound(1)).toBe(0.006);
});