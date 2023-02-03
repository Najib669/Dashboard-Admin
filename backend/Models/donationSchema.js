const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require('moment-timezone')


const donationSchema= new Schema({
    donorName: String, 
    email: String,
    amount: Number,
    currency:String,
    createdAt: {
        type: Date,
        default : moment(Date.now()).tz('Europe/Paris').format(),
    },


})

const Donation= mongoose.model('Donation', donationSchema)

module.exports = Donation;