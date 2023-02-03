const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Image = require ('./imageSchema')
const moment = require('moment-timezone')


const eventSchema= new Schema({
    name: String, 
    description: String,
    startDate: Date,
    endDate: Date,
    imgUrl:String,
   //img:Image.schema,
    createdAt: {
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    },
    updatedAt : {
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    },
    author: String,
    location:String


})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event;