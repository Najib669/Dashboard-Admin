const express = require ('express')
const router = express.Router()
const Donation = require ("../Models/donationSchema")


//get donation
router.get("/", (req, res) => {
  Donation.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

    //get Donation by id
    router.get("/:id", (req, res) => {
      Donation.findById({ _id: req.params.id }, (err, data) => {
        err ? console.log(err) : res.json(data);
      });
    });
  
    

//delete event by id
router.delete('/:id' ,(req,res)=>{
  Donation.findByIdAndDelete({_id:req.params.id},(err,data)=>{
  err ? console.log(err) : res.json(data)
  })
})



module.exports = router