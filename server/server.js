var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/form', (req,res) =>{
   nodemailer.createTestAccount((err, account) => {
       const htmlEmail = `
       <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Email: ${req.body.email} </li>
        <ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>`

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'elda.leannon@ethereal.email',
                pass: 'nqMpurP1ADFzvk4epR'
            }
        });

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'elda.leannon@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'new message',
            text: req.body.message,
            html: htmlEmail,
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
        })
   })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listening to port ${PORT}`)
})
