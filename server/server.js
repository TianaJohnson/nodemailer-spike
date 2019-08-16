const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require ('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ encoded: false}))

app.post('/api/form', (req,res) =>{
    console.log(req.body)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listening to port ${PORT}`)
})
