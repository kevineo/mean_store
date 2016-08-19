var mongoose = require('mongoose');
var productSchema = require('./product');

var Product = mongoose.model('Product', productSchema);

var p = new Product({
  name: 'test',
  price: {
    amount: 5,
    currency: 'MYR'
  },
  category: {
    name: 'test'
  }
});

console.log(p.internal.approximatePriceMYR); // 5

p.price.amount = 88;
console.log(p.internal.approximatePriceMYR); // 88

p.price.currency = 'USD';
console.log(p.internal.approximatePriceMYR); // 80
p.price.amount = 11;
console.log(p.internal.approximatePriceMYR); // 10