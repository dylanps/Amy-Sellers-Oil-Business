console.log('loaded index.js');

require('dotenv').config();

//initialize express app
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');
const app = express();
var router = express.Router();

// set port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// view engine setup
app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/sendEmail', (req, res) => {  
//     // res.render('contact');
//     res.send('Email was sent.');
// })

//git test

// main back-end code starts here

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

app.post('/sendEmail', async (req, res) => {
    
    var name = req.body.name;
    var senderEmail = req.body.email;
    var HTMLmessage = `
    <p>Amy,</p>

    <p> ${req.body.message}</p>

    <p> ${req.body.name}</p>
    <p> ${req.body.email}</p>
    `;
    var message = `
    Amy,

    ${req.body.message}

    ${req.body.name}
    ${req.body.email}
    `;
    
    var sendTo = 'sellersdylan92@gmail.com';
    var subjectLine = `10 Kids Later | Contact Page | ${name}`;

    const msg = {
        to: sendTo,
        from: senderEmail,
        subject: subjectLine,
        text: message,
        html: HTMLmessage,
    };

    sgMail.send(msg);

    console.log('Email Sent!');
});

