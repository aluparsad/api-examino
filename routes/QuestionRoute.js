const route = require('express').Router();
const Exam = require('../model/Question');
const Answer = require('../model/Answer');
const Test = require('../model/Question');



route.post('/exam/remove',  (req,res) => {
    const title = req.body.title

    Exam
    .deleteOne({title:title})
    .then(r => res.status(200).send({msg:'deleted'}))
    .catch(err => res.status(400).send({err:"cannot delete"}))
})

route.put('/exam', async (req,res) => {
    const title = req.body.title;
    const test = await Exam.findOne({title:title})

    if(test) return res.json(test)

    return res.sendStatus(404);
})

route.get('/exam/all', async(req,res) => {
    const exams = await Exam.find();
    
    if(exams) return res.json(exams);
    return res.sendStatus(404)
})

route.post('/submit', async (req,res) => {
    const test = req.body.test;
    console.log(test)
    const ans = new Answer(test);
    ans
    .save()
    .then(()=>{
        res.sendStatus(500)
    })
    .catch(err=>{
        res.send(err)
    })
})

route.post('/create', async (req,res) => {
    const exam = req.body.exam;
    console.log(exam)

    const que = new Test(exam)

    que.save()
    .then(result=>{
        res.send(result)
    })
    .catch(err=> res.status(402).send(err))
})

module.exports = route;