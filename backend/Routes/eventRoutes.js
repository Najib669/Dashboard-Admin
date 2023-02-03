const express = require ('express')
const router = express.Router()
const Event  = require ('../Models/eventSchema.js')

//post event
router.post('/newevent' ,(req,res)=>{
let newEvent = new Event(req.body)
newEvent.save((err,data)=>{
err ? console.log(err) : res.send('event was added')
})
})
//get event
router.get('/' ,(req,res)=>{
    Event.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })
//get event by id
router.get("/:id", (req, res) => {
    Event.findById({ _id: req.params.id }, (err, data) => {
      err ? console.log(err) : res.json(data);
    });
  });
//delete event by id
router.delete('/:id' ,(req,res)=>{
    Event.findByIdAndDelete({_id:req.params.id},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })
//update event by id
router.put('/:id' ,(req,res)=>{
    Event.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })



module.exports = router