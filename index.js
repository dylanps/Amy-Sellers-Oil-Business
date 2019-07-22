console.log('loaded index.js');

require('dotenv').config();

//initialize express app
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');
const app = express();
const request = require('request');

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

// main back-end code starts here

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

app.post('/sendEmail', (req, res) => {
    
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
    
    var sendTo = 'amy@10kidslater.com';
    var subjectLine = `10 Kids Later | Contact Page | ${name}`;

    const msg = {
        to: sendTo,
        from: senderEmail,
        subject: subjectLine,
        text: message,
        html: HTMLmessage,
    };

    sgMail.send(msg);

    console.log('Email Sent index.js!');

    res.redirect('/contact.html');
});

//Newsletter signup

app.post('/newsletter-signup', (req, res) => {
    console.log(req.body);

    const email = req.body.email;

    if(!email) {
        console.log('no email submitted');
        return;
    };

    // construct request data

    const data = {
        members: [
        {
            email_address: email,
            status: 'subscribed',
        }
    ]
    }

    // make data format compatible with mailchimp API
    const postData = JSON.stringify(data);

    console.log(postData);

    const options = {
        url: 'https://us3.api.mailchimp.com/3.0/lists/6033c4dee9',
        method: 'POST',
        headers: {
            Authorization: 'auth 5a0b6bd335a80a2f98465349541b844d-us3'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if(err) {
            console.log('mailchimp request failed');
        } else {
            if (response.status === 200) {
                console.log('subscribe success');
            }
            else {
                console.log('subscribe failed');
            }
        }
    });

    res.redirect('/');
});

