const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
    },
    reportLong:{
        type: Number,
        required: true,
    },
    reportLat:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        required: false,
    },
    address:{
        type: String,
        required: false,
    },
    phone:{
        type: String,
        required: false,
    },
    workingHours:{
        type: String,
        required: false,
    },
    moreInformation:{
        type: String,
        required: false,
    },
    reportDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Report', reportSchema)