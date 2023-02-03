const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Image = require ('./imageSchema')
const moment = require('moment-timezone')



const newsSchema= new Schema({
    name:String,
    description: String,
    img:String,
    /* createdAt: { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now }, */
    author: String,
    createdAt: {
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    }
})

const News = mongoose.model('News', newsSchema)

module.exports = News;