const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortCutProduct = new Schema({

    //********************/
    productsType:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    },

    dis:{
        type: String,
        required:true
    },

    price:{
        type: Number,
        required:true
    },

    discount:{
        type: Object
    },

    express:{
        type: Boolean
    },
})
module.exports = mongoose.model('ShortCutProduct',shortCutProduct)
