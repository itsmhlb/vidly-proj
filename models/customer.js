const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    phone: {
        type: Number,
        required: true,
        minlength: 11,
        maxlength: 11
    },
    isGold: {
        type: Boolean,
        default: false
    }
  }));

  function validateCustomer(customer){
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };

    return Joi.validate(customer, schema);

};

module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;