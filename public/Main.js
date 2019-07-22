import { getMaxListeners } from "cluster";

//code that changes text based on clicking a profile image.

console.log('main.js loaded');

const Amy = document.getElementById('amy-profile-about');
const Glen = document.getElementById('glen-profile');
const Ivy = document.getElementById('ivy-profile');
const Chelsea = document.getElementById('chelsea-profile');
const Tim = document.getElementById('tim-profile');
const Megan = document.getElementById('megan-profile');
const Chad = document.getElementById('chad-profile');
const Meri = document.getElementById('meri-profile');
const Dylan = document.getElementById('dylan-profile');
const Natalie = document.getElementById('natalie-profile');
const Katy = document.getElementById('katy-profile');
const Tanner = document.getElementById('tanner-profile');

Amy.addEventListener("mouseenter", function() {
    console.log('clicked on Amy');
    document.getElementById('about-info-text').innerHTML = 'Insert Amy-bio here';
});

Glen.addEventListener("mouseenter", function() {
    console.log('clicked on Glen');
    document.getElementById('about-info-text').innerHTML = 'Insert Glen-bio here';
});

Ivy.addEventListener("mouseenter", function() {
    console.log('clicked on Ivy');
    document.getElementById('about-info-text').innerHTML = 'Insert Ivy-bio here';
});

Chelsea.addEventListener("mouseenter", function() {
    console.log('clicked on Chelsea');
    document.getElementById('about-info-text').innerHTML = 'Insert Chelsea-bio here';
});

Tim.addEventListener("mouseenter", function() {
    console.log('clicked on Tim');
    document.getElementById('about-info-text').innerHTML = 'Insert Tim-bio here';
});

Megan.addEventListener("mouseenter", function() {
    console.log('clicked on Megan');
    document.getElementById('about-info-text').innerHTML = 'Insert Megan-bio here';
});

Chad.addEventListener("mouseenter", function() {
    console.log('clicked on Chad');
    document.getElementById('about-info-text').innerHTML = 'Insert Chad-bio here';
});

Meri.addEventListener("mouseenter", function() {
    console.log('clicked on Meri');
    document.getElementById('about-info-text').innerHTML = 'Insert Meri-bio here';
});

Dylan.addEventListener("mouseenter", function() {
    console.log('clicked on Dylan');
    document.getElementById('about-info-text').innerHTML = '<b>Dylan</b> is the engineer and the athlete. After playing hours of sports, he loves using <a href=\'https://www.doterra.com/US/en/p/deep-blue-rub\' target=\'_blank\'>Deep Blue Rub</a>. It relaxes his muscles and gets him back on the court quicker. He also finds himself having trouble sleeping at night due to stuffy noses. Smelling <a href=\'https://www.doterra.com/US/en/p/peppermint-oil\' target=\'_blank\'>Peppermint oil</a> clears his sinuses immediately and makes it easier for him to breath and relax when he is otherwise restless in bed.';
});

Natalie.addEventListener("mouseenter", function() {
    console.log('clicked on Natalie');
    document.getElementById('about-info-text').innerHTML = 'Insert Natalie-bio here';
});

Katy.addEventListener("mouseenter", function() {
    console.log('clicked on Katy');
    document.getElementById('about-info-text').innerHTML = 'Insert Katy-bio here';
});

Tanner.addEventListener("mouseenter", function() {
    console.log('clicked on Tanner');
    document.getElementById('about-info-text').innerHTML = 'Insert Tanner-bio here';
});

// CONTACT PAGE

sendButton = document.getElementById('contact-page-send');

sendButton.addEventListener("click", function(){

    document.getElementById('contact-name-input').val() = '';
    document.getElementById('contact-email-input').val() = '';
    document.getElementById('contact-message-input').val() = '';
});