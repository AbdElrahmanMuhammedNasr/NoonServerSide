const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    categoryType:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('Category', category)
