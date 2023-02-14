const express = require('express')
const router = express.Router()
const Report = require('../models/report')

//Getting all reports
router.get('/', async (req, res) =>{
    try{
        const reports = await Report.find({isApproved: true})
        res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

        res.json(reports)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})
//Creating one report
router.post('/', async (req, res) =>{
    const report = new Report({
        name: req.body.name,
        reportLat: req.body.reportLat,
        reportLong: req.body.reportLong,
        reportDate: req.body.reportDate,
        isApproved: req.body.isApproved
    })
    try{
        const newReport = await report.save()
        res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.status(201).json(newReport)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})


module.exports = router

