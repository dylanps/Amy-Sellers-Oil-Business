// CONTACT PAGE
console.log('contact.js loaded');

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener("submit", function(e) {

    console.log('entered event listener')
    e.preventDefault();

    const myName = document.getElementById('contact-name-input').value;
    const myEmail = document.getElementById('contact-email-input').value;
    const myMsg = document.getElementById('contact-message-input').value;

    console.log('got this far')

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/sendEmail', true);
    xhr.setRequestHeader('Content-type', "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ "name" : `${myName}`, "email": `${myEmail}`, "msg" : `${myMsg}` }));

    console.log('status: ', xhr.status);

    // replace send button with a message saying it was sent.
    var div = document.createElement('div');
    div.setAttribute('class', 'submitted-message');

    div.innerHTML += '<p>Your message was sent!</p>';

    document.getElementById('contact-left').appendChild(div);

    document.getElementById('contact-page-send').setAttribute('style', 'display: none');

    console.log('form submitted!');
});
