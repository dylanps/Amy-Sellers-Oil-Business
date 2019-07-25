console.log('main.js loaded');

//code that changes text based on mouse-enter over a profile image.

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

AmyBio = '<b>Amy</b> is is a recovering mother of 10 amazing kids and blessed with 15 grand-children and counting, Amy loves to learn and almost always has a book in hand.  She enjoys scuba-diving in warm water, and exploring new places to learn about the people and plants that live there!  Her favorite oil is the Immortelle blend as she strives to age gracefully, but she loves to wake up with Wild Orange and Peppermint, and wonders what she’s drinking without Slim & Sassy in her water bottle.';
GlenBio = '<b>Glen</b> is an amazing husband and hardworking dad, his favorite title is “Papa”.  He loves entertaining the littles, teaching them to collect the eggs, ride the quads, and push him into the nearest body of water.  He loves the Serenity duo - Serenity softgels and Oil at bedtime to let him drift off to dreamland so he doesn’t miss his morning run. Copaiba is also this “farmer’s” friend.';
IvyBio = '';
TimBio = '';
ChelseaBio = '';
MeganBio = '';
ChadBio = '';
MeriBio = '';
DylanBio = '<b>Dylan</b> is the engineer and the athlete. After playing hours of sports, he loves using <a href=\'https://www.doterra.com/US/en/p/deep-blue-rub\' target=\'_blank\'>Deep Blue Rub</a>. It relaxes his muscles and gets him back on the court quicker. He also finds himself having trouble sleeping at night due to stuffy noses. Smelling <a href=\'https://www.doterra.com/US/en/p/peppermint-oil\' target=\'_blank\'>Peppermint oil</a> clears his sinuses immediately and makes it easier for him to breath and relax when he is otherwise restless in bed.';
NatalieBio = '';
KatyBio = '';
TannerBio = '<b>Tanner</b> is our fun-loving, easy-going, 17 year old. He loves music, friends, and school!  He dances his way down the halls, and any other time he gets the chance.  With his Down syndrome diagnosis, Tanner has benefitted from Frankincense daily since he was a baby (he needs those anti- oxidants!), but he loves InTune to keep him focused on learning and Triease to breathe freely all year round.';


Amy.addEventListener("mouseenter", function() {
    console.log('clicked on Amy');
    document.getElementById('about-info-text').innerHTML = AmyBio;
});

Glen.addEventListener("mouseenter", function() {
    console.log('clicked on Glen');
    document.getElementById('about-info-text').innerHTML = GlenBio;
});

Ivy.addEventListener("mouseenter", function() {
    console.log('clicked on Ivy');
    document.getElementById('about-info-text').innerHTML = IvyBio;
});

Chelsea.addEventListener("mouseenter", function() {
    console.log('clicked on Chelsea');
    document.getElementById('about-info-text').innerHTML = ChelseaBio;
});

Tim.addEventListener("mouseenter", function() {
    console.log('clicked on Tim');
    document.getElementById('about-info-text').innerHTML = TimBio;
});

Megan.addEventListener("mouseenter", function() {
    console.log('clicked on Megan');
    document.getElementById('about-info-text').innerHTML = MeganBio;;
});

Chad.addEventListener("mouseenter", function() {
    console.log('clicked on Chad');
    document.getElementById('about-info-text').innerHTML = ChadBio;
});

Meri.addEventListener("mouseenter", function() {
    console.log('clicked on Meri');
    document.getElementById('about-info-text').innerHTML = MeriBio;
});

Dylan.addEventListener("mouseenter", function() {
    console.log('clicked on Dylan');
    document.getElementById('about-info-text').innerHTML = DylanBio;
});

Natalie.addEventListener("mouseenter", function() {
    console.log('clicked on Natalie');
    document.getElementById('about-info-text').innerHTML = NatalieBio;
});

Katy.addEventListener("mouseenter", function() {
    console.log('clicked on Katy');
    document.getElementById('about-info-text').innerHTML = KatyBio;
});

Tanner.addEventListener("mouseenter", function() {
    console.log('clicked on Tanner');
    document.getElementById('about-info-text').innerHTML = TannerBio;
});

// CONTACT PAGE

sendButton = document.getElementById('contact-page-send');

sendButton.addEventListener("click", function(){

    document.getElementById('contact-name-input').val() = '';
    document.getElementById('contact-email-input').val() = '';
    document.getElementById('contact-message-input').val() = '';
});
