//Create a user schema:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  email: {
    type: String,
    requied: true,
  },
  password: String,
  birthDay: Date,
  gender: String,
  phoneNumber: Number,
  adress: String,
  country: String,
  city: String,
  imgUrl: String,
 
});

const User = mongoose.model('User',userSchema)
module.exports = User;

