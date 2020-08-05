const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cart = new Schema({
        email:{
            type:String
        },
        productId:{
            type:Object
        }
})
module.exports = mongoose.model('Cart',cart)
