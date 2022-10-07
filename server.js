require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const authRoute = require('./routes/authRoute')
const testRoute = require('./routes/QuestionRoute')
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log(`Connected to DB`)
        app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
    })

app.use('/auth', authRoute);
app.use('/test', testRoute);

