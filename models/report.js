const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reportLong:{
        type: Number,
        required: true,
    },
    reportLat:{
        type: Number,
        required: true,
    },
    isApproved:{
        type: Boolean,
        required: true,
    },
    reportDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Report', reportSchema)