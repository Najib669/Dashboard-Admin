const express = require ('express')
const router = express.Router()
const Order  = require ('../Models/orderSchema')

//Get Orders
router.get('/' ,(req,res)=>{
    Order.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })

//get order by id
router.get("/:id", (req, res) => {
    Order.findById({ _id: req.params.id }, (err, data) => {
      err ? console.log(err) : res.json(data);
    });
  });
  

module.exports = router