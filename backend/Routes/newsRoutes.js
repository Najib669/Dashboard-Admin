const express = require("express");
const router = express.Router();
const News = require("../Models/newsSchema");

//post event
router.post("/newnews", (req, res) => {
  let newNews = new News(req.body);
  newNews.save((err, data) => {
    err ? console.log(err) : res.send("news was added");
  });
});
//get news
router.get("/", (req, res) => {
  News.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

//get news by id
router.get("/:id", (req, res) => {
  News.findById({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

//delete news by id
router.delete("/:id", (req, res) => {
  News.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
//update news by id
router.put("/:id", (req, res) => {
  News.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, data) => {
      err ? console.log(err) : res.json(data);
    }
  );
});

module.exports = router;
