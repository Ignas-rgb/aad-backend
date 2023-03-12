const express = require('express')
const router = express.Router()
const Report = require('../models/report')

//Getting all trash reports
router.get('/trash', async (req, res) =>{
    try{
        const reports = await Report.find({type: 'trash'})
        res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

        res.json(reports)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})
//Getting all dump reports
router.get('/dumps', async (req, res) =>{
    try{
        const reports = await Report.find({type: 'dump'})
        res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

        res.json(reports)
    }catch (error){
        res.status(500).json({message: error.message})
    }
})
//Getting all reports
router.get('/', async (req, res) =>{
    try{
        const reports = await Report.find()
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
        type: req.body.type,
        reportLong: req.body.reportLong,
        reportLat: req.body.reportLat,
        status: req.body.status,
        address: req.body.address,
        phone: req.body.phone,
        workingHours: req.body.workingHours,
        moreInformation: req.body.moreInformation,
        reportDate: req.body.reportDate,
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

