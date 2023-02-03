const express = require ('express')
const router = express.Router()
const Mail  = require ('../Models/mailSchema')


//get mail
router.get('/' ,(req,res)=>{
    Mail.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })

    //get Mail by id
router.get("/:id", (req, res) => {
    Mail.findById({ _id: req.params.id }, (err, data) => {
      err ? console.log(err) : res.json(data);
    });
  });
  
//delete mail by id
router.delete('/:id' ,(req,res)=>{
    Mail.findByIdAndDelete({_id:req.params.id},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })




module.exports = router