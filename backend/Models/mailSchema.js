const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment-timezone')

const mailSchema= new Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: {
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    },
    createdBy: String,
   
})

const Mail= mongoose.model('Mail', mailSchema)

module.exports = Mail;