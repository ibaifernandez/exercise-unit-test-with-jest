const fromDollarToYen = (dollars) => {
    return dollars * 106.58;
}

const fromEuroToDollar = (euros) => {
    return euros * 1.2;
}

const fromYanToPound = (yens) => {
    return yens * 0.006;
}

console.log(fromEuroToDollar(3.5));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };
