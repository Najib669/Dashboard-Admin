const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Image = require ('./imageSchema')
const moment = require('moment-timezone')


const productSchema= new Schema({
    productName: String, 
    //img:[Image.schema],
    imgUrl:String,
    price: String,
    stock:Number,
    createdAt: {
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    },
    createdBy: String,
    updatedAt :{
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    },
    updatedBy: String


})

const Product= mongoose.model('Product', productSchema)

module.exports = Product;