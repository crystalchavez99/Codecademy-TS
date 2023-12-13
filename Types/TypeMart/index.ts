import products from './products';

let productName: string = "fanny pack";

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = "12345 Broadway New York City, New York";

let product;
product = products.find(prod => prod.name === productName);

console.log(product);


if (product.preOrder === "true") {
  console.log(`${product.name} is on it's way.`)
}
if (Number(product.price) > 25) {
  shipping = 0;
  console.log(`Free shipping!`)
} else {
  shipping = 5;
  console.log(`Shipping is $5`);
}
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}
taxTotal = (Number(product.price) * taxPercent);
total = (Number(product.price) + taxTotal + shipping);

console.log(`Item: ${product.name}\nShipping Address:
${shippingAddress}\nPrice: ${product.price}\nTax Total: ${taxTotal}\nShipping: ${shipping}\nTotal Amount: $${total.toFixed(2)}`);
