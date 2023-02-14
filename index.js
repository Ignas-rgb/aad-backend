require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app  = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3030
mongoose.set('strictQuery', true)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true, })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const allowedOrigins = ['http://localhost:49570/#/',
                      'http://localhost:3000/'];

app.use(cors(corsOptions = { origin: false }))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json())

const reportsRouter = require('./routes/reports')
app.use('/reports', reportsRouter)

app.listen(PORT, () => console.log('Server has started'))