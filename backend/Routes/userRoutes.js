const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema.js");
const {register} = require("../controllers/register");
const {login} = require('../controllers/login')



//login
router.post('/signin',login);


//register
router.post("/newuser", register);

//post user
 router.post("/newuserba", (req, res) => {
let newUser = new User(req.body);
newUser.save((err, data) => {
err ? console.log(err) : res.send("user was added");
 });
});

//get users
router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

////get user by id
router.get("/:id", (req, res) => {
  User.findById({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

//delete user by id
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
//updated user by id
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, data) => {
      err ? console.log(err) : res.json(data);
    }
  );
 });

module.exports = router;
