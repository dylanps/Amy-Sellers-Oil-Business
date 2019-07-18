console.log('loaded index.js');
console.log('got here!');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// console.log(process.env);

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const msg = {
    to: 'sellersdylan92@gmail.com',
    from: 'sellersdylan92@gmail.com',
    subject: 'SendGrid Test Email',
    text: 'here is my text...',
    // html: "",
};

sgMail.send(msg);

console.log('Email Sent!');

