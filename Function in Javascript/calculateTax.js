function calculateTax(income) {
    return (function() {
        if (income <= 30000) {
            return income * 0.1;
        } else if (income <= 70000) {
            return income * 0.2;
        } else {
            return income * 0.3;
        }
    })();
}

console.log(calculateTax(25000));
console.log(calculateTax(50000));
console.log(calculateTax(100000));
