const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('./model/message')
const EventLog = require('./model/eventLog')

const uri = 'mongodb+srv://user:user@cluster0-n7lzl.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const db = mongoose.connection;

router.get('/', (req,res)=>{
    res.send('server is up and running');
});
router.get('/eventlog', (req, res)=>
    {
        console.log(eventdata);
        var data = JSON.stringify(eventdata);
        res.send(data);
    }
)
router.get('/history', (req, res)=>
    {
        console.log(historydata);
        var data = JSON.stringify(historydata);
        res.send(data);
    }
)
router.get('/roomhistory', (req, res)=>
    {
        console.log(historyroom);
        var data = JSON.stringify(historyroom);
        res.send(data);
    }
)

var eventdata =  EventLog.find()
.exec()
.then();

var historydata =  Message.find()
.exec()
.then();

var historyroom =  Message.find({'chat': 'test'})
.exec()
.then();
module.exports = router;