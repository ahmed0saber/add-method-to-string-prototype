String.prototype.toFormattedPrice = function (unit) {
    let number = this;

    while (
        number.includes(".") &&
        ["0", "."].includes(number[number.length - 1])
    ) {
        number = number.slice(0, -1);
    }

    return `${number} ${unit}`;
};

const unformattedPrices = ["212.00", "150.88", "200.00", "512.10", "120.08"]
const formattedPrices = unformattedPrices.map(price => price.toFormattedPrice("USD"))
console.log(formattedPrices)
