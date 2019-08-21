// NEWSLETTER.JS
console.log('newsletter.js loaded');

const newsletterForm = document.getElementById('email-newsletter-form');

newsletterForm.addEventListener("submit", function(e) {

    console.log('entered event listener')
    e.preventDefault();

    const myEmail = document.getElementById('newsletter-input').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/newsletter-signup', true);
    xhr.setRequestHeader('Content-type', "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"email": `${myEmail}`}));

    console.log('status: ', xhr.status);

    // swap out the submit button with a message saying thanks for subscribing

    var newsletterDiv = document.createElement('div');

    newsletterDiv.setAttribute('class', 'submitted-message');

    newsletterDiv.innerHTML += '<p>Thank you for subscribing!</p>';

    document.getElementById('newsletter-form-container').appendChild(newsletterDiv);

    document.getElementById('newsletter-input').setAttribute('style', 'display: none');
    document.getElementById('newsletter-submit').setAttribute('style', 'display: none');



    console.log('form submitted!');
});