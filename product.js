var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

var productSchema = {
  name: {type: String, required: true},
  pictures: [{type: String, match: /^http:\/\//i}],
  price: {
    amount: {
      type: Number, 
      required: true,
      set: function(v) {
        this.internal.approximatePriceMYR = v / (fx()[this.price.currency] || 1);
        return v;
      }
    },
    currency: {
      type: String,
      enum: ['MYR', 'USD'],
      required: true,
      set: function(v) {
        this.internal.approximatePriceMYR = this.price.amount / (fx() [v] || 1);
      return v;
      }
    }
  },
  category: Category.categorySchema,
  internal: {
    approximatePriceMYR: Number
  }
};

var schema = new mongoose.Schema(productSchema);

var currentSymbols = {
  'MYR': 'RM',
  'USD': '$'
};

schema.virtual('displayPrice').get(function (params) {
  return currencySymbold[this.price.currency] + '' + this.price.amount;
});

schema.set('toObject', {virtuals: true});
schema.set('toJSON', {virtuals: true});

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;