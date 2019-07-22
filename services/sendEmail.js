require('dotenv').config();

//initialize express app
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const path = require('path');
const app = express();

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

// view engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//set port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.post('/services/sendEmail', (req, res) => {

    console.log('sendEmail.js  was triggered');
    
    var name = ${req.body.name};
    var senderEmail = ${req.body.email};
    var message = `
    <p>You have a new message from your contact page on 10KidsLater.com </p>

    <h3>Contact Details</h3>

    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>

    <h3>Message:</h3>

    <p> ${req.body.message}</p>
    `;
    
    var sendTo = 'sellersdylan92@gmail.com';
    var subjectLine = `10 Kids Later | Contact Page | ${name}`;

    const msg = {
        to: sendTo,
        from: senderEmail,
        subject: subjectLine,
        text: message,
        // html: "",
    };

    sgMail.send(msg);

    console.log('Email Sent from the sendEmail.js file!');
});