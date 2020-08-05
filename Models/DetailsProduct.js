const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailProduct = new Schema({
    // form short cut product
    productId:{
        type:String,
        required:true
    },
    ///////////////////////
    productsType:{
        type:String,
        required:true

    },

    image:{
        type:String,
        required:true

    },

    modelNumber:{
        type:String,
        required:true

    },
    discount:{
        type:Number,
        required:true

    },
    city:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true

    },
    deliverIn:{
        type:String,
        required:true

    },
    dis:{
        type:String,
        required:true

    },
    express:{
        type:Boolean,
        required:true

    },
    overview:{
        type:Array,
        required:true

    },
    guarantee:{
        type:String,
        required: true
    }

});

module.exports = mongoose.model('DetailProduct',detailProduct);
