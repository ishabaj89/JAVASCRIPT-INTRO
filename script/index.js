const priceInput = prompt("Enter a price tag (e.g. $49.99):");

const priceString = priceInput.replace("$", "");

const price = parseFloat(priceString);

const discount = price * 0.10;

const newPrice = price - discount;

console.log(`Your new price is: $${newPrice.toFixed(2)}`);