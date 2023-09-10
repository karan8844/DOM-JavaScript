
const  { calculateTax, taxRate } = require('./taxUtils');
const itemPrice = 100;
const taxAmount = calculateTax(itemPrice);

console.log(`Item price: $${itemPrice}`);
console.log(`Tax rate: ${taxRate}`);
console.log(`Tax amount: $${taxAmount}`);
console.log(`Total price with tax: $${itemPrice + taxAmount}`);
