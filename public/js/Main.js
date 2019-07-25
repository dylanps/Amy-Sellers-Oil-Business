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

//mobile

const AmyMobile = document.getElementById('amy-profile-mobile');
const GlenMobile = document.getElementById('glen-profile-mobile');
const IvyMobile = document.getElementById('ivy-profile-mobile');
const ChelseaMobile = document.getElementById('chelsea-profile-mobile');
const TimMobile = document.getElementById('tim-profile-mobile');
const MeganMobile = document.getElementById('megan-profile-mobile');
const ChadMobile = document.getElementById('chad-profile-mobile');
const MeriMobile = document.getElementById('meri-profile-mobile');
const DylanMobile = document.getElementById('dylan-profile-mobile');
const NatalieMobile = document.getElementById('natalie-profile-mobile');
const KatyMobile = document.getElementById('katy-profile-mobile');
const TannerMobile = document.getElementById('tanner-profile-mobile');

AmyBio = '<b>Amy</b> is a recovering mother of 10 amazing kids and blessed with 15 grand-children and counting, Amy loves to learn and almost always has a book in hand.  She enjoys scuba-diving in warm water, and exploring new places to learn about the people and plants that live there!  Her favorite oil is the Immortelle blend as she strives to age gracefully, but she loves to wake up with <a href=\'http://doterra.com/US/en/p/wild-orange-oil?OwnerID=260207\' target=\'_blank\'>Wild Orange</a> and <a href=\http://doterra.com/US/en/p/peppermint-oil?OwnerID=260207\' target=\'_blank\'>Peppermint</a>, and wonders what she’s drinking without <a href=\http://doterra.com/US/en/p/slim-and-sassy-oil?OwnerID=260207\' target=\'_blank\'>Slim & Sassy</a> in her water bottle.';
GlenBio = '<b>Glen</b> is an amazing husband and hardworking dad, his favorite title is “Papa”.  He loves entertaining the littles, teaching them to collect the eggs, ride the quads, and push him into the nearest body of water.  He loves the Serenity duo - <a href=\'http://doterra.com/US/en/p/doterra-serenity-restful-complex-softgels?OwnerID=260207\' target=\'_blank\'>Serenity softgels</a> and <a href=\'http://doterra.com/US/en/p/doterra-serenity-oil?OwnerID=260207\' target=\'_blank\'>Oil</a> at bedtime to let him drift off to dreamland so he doesn’t miss his morning run. <a href=\'https://www.doterra.com/US/en/p/copaiba-softgels?OwnerID=260207\' target=\'_blank\'>Copaiba</a> is also this “farmer’s” friend.';
IvyBio = '';
TimBio = '';
ChelseaBio = '';
MeganBio = '';
ChadBio = '';
MeriBio = '';
DylanBio = '<b>Dylan</b> is the engineer and the athlete. After playing hours of sports, he loves using <a href=\'http://doterra.com/US/en/p/deep-blue-rub?OwnerID=260207\' target=\'_blank\'>Deep Blue Rub</a>. It relaxes his muscles and gets him back on the court quicker. He also finds himself having trouble sleeping at night due to stuffy noses. Smelling <a href=\'https://www.doterra.com/US/en/p/peppermint-oil?OwnerID=260207\' target=\'_blank\'>Peppermint oil</a> clears his sinuses immediately and makes it easier for him to breath and relax when he is otherwise restless in bed.';
NatalieBio = '';
KatyBio = '';
TannerBio = '<b>Tanner</b> is our fun-loving, easy-going, 17 year old. He loves music, friends, and school!  He dances his way down the halls, and any other time he gets the chance.  With his Down syndrome diagnosis, Tanner has benefitted from <a href=\'http://doterra.com/US/en/p/frankincense-oil?OwnerID=260207\' target=\'_blank\'>Frankincense</a> daily since he was a baby (he needs those anti- oxidants!), but he loves <a href=\'http://doterra.com/US/en/p/in-tune-oil?OwnerID=260207\' target=\'_blank\'>Intune</a> to keep him focused on learning and Triease to breathe freely all year round.';

Amy.addEventListener("click", function() {
    console.log('clicked on Amy');
    document.getElementById('about-info-text').innerHTML = AmyBio;
    document.getElementById('about-pic').src = '/Images/Amy Profile about.png';
});

Glen.addEventListener("click", function() {
    console.log('clicked on Glen');
    document.getElementById('about-info-text').innerHTML = GlenBio;
    document.getElementById('about-pic').src = '/Images/Glen Profile.png';
});

Ivy.addEventListener("click", function() {
    console.log('clicked on Ivy');
    document.getElementById('about-info-text').innerHTML = IvyBio;
    document.getElementById('about-pic').src = '/Images/Ivy Profile.png';
});

Chelsea.addEventListener("click", function() {
    console.log('clicked on Chelsea');
    document.getElementById('about-info-text').innerHTML = ChelseaBio;
    document.getElementById('about-pic').src = '/Images/Chelsea Profile.png';
});

Tim.addEventListener("click", function() {
    console.log('clicked on Tim');
    document.getElementById('about-info-text').innerHTML = TimBio;
    document.getElementById('about-pic').src = '/Images/Tim Profile.png';
});

Megan.addEventListener("click", function() {
    console.log('clicked on Megan');
    document.getElementById('about-info-text').innerHTML = MeganBio;
    document.getElementById('about-pic').src = '/Images/Megan Profile.png';
});

Chad.addEventListener("click", function() {
    console.log('clicked on Chad');
    document.getElementById('about-info-text').innerHTML = ChadBio;
    document.getElementById('about-pic').src = '/Images/Chad Profile.png';
});

Meri.addEventListener("click", function() {
    console.log('clicked on Meri');
    document.getElementById('about-info-text').innerHTML = MeriBio;
    document.getElementById('about-pic').src = '/Images/Meri Profile.png';
});

Dylan.addEventListener("click", function() {
    console.log('clicked on Dylan');
    document.getElementById('about-info-text').innerHTML = DylanBio;
    document.getElementById('about-pic').src = '/Images/Dylan Profile.png';
});

Natalie.addEventListener("click", function() {
    console.log('clicked on Natalie');
    document.getElementById('about-info-text').innerHTML = NatalieBio;
    document.getElementById('about-pic').src = '/Images/Natalie Profile.png';
});

Katy.addEventListener("click", function() {
    console.log('clicked on Katy');
    document.getElementById('about-info-text').innerHTML = KatyBio;
    document.getElementById('about-pic').src = '/Images/Katy Profile.png';
});

Tanner.addEventListener("click", function() {
    console.log('clicked on Tanner');
    document.getElementById('about-info-text').innerHTML = TannerBio;
    document.getElementById('about-pic').src = '/Images/Tanner Profile.png';
});

// MOBILE EVENT LISTENERS

AmyMobile.addEventListener("click", function() {
    console.log('clicked on Amy');
    document.getElementById('about-info-text').innerHTML = AmyBio;
    document.getElementById('about-pic').src = '/Images/Amy Profile about.png';
    document.getElementById('about-person').scrollIntoView();
});

GlenMobile.addEventListener("click", function() {
    console.log('clicked on Glen');
    document.getElementById('about-info-text').innerHTML = GlenBio;
    document.getElementById('about-pic').src = '/Images/Glen Profile.png';
    window.scrollTo(0, 1200);
});

IvyMobile.addEventListener("click", function() {
    console.log('clicked on Ivy');
    document.getElementById('about-info-text').innerHTML = IvyBio;
    document.getElementById('about-pic').src = '/Images/Ivy Profile.png';
    window.scrollTo(0, 1200);
});

ChelseaMobile.addEventListener("click", function() {
    console.log('clicked on Chelsea');
    document.getElementById('about-info-text').innerHTML = ChelseaBio;
    document.getElementById('about-pic').src = '/Images/Chelsea Profile.png';
    window.scrollTo(0, 1200);
});

TimMobile.addEventListener("click", function() {
    console.log('clicked on Tim');
    document.getElementById('about-info-text').innerHTML = TimBio;
    document.getElementById('about-pic').src = '/Images/Tim Profile.png';
    window.scrollTo(0, 1200);
});

MeganMobile.addEventListener("click", function() {
    console.log('clicked on Megan');
    document.getElementById('about-info-text').innerHTML = MeganBio;
    document.getElementById('about-pic').src = '/Images/Megan Profile.png';
    window.scrollTo(0, 1200);
});

ChadMobile.addEventListener("click", function() {
    console.log('clicked on Chad');
    document.getElementById('about-info-text').innerHTML = ChadBio;
    document.getElementById('about-pic').src = '/Images/Chad Profile.png';
    window.scrollTo(0, 1200);
});

MeriMobile.addEventListener("click", function() {
    console.log('clicked on Meri');
    document.getElementById('about-info-text').innerHTML = MeriBio;
    document.getElementById('about-pic').src = '/Images/Meri Profile.png';
    window.scrollTo(0, 1200);
});

DylanMobile.addEventListener("click", function() {
    console.log('clicked on Dylan');
    document.getElementById('about-info-text').innerHTML = DylanBio;
    document.getElementById('about-pic').src = '/Images/Dylan Profile.png';
    window.scrollTo(0, 1200);
});

NatalieMobile.addEventListener("click", function() {
    console.log('clicked on Natalie');
    document.getElementById('about-info-text').innerHTML = NatalieBio;
    document.getElementById('about-pic').src = '/Images/Natalie Profile.png';
    window.scrollTo(0, 1200);
});

KatyMobile.addEventListener("click", function() {
    console.log('clicked on Katy');
    document.getElementById('about-info-text').innerHTML = KatyBio;
    document.getElementById('about-pic').src = '/Images/Katy Profile.png';
    window.scrollTo(0, 1200);    
});

TannerMobile.addEventListener("click", function() {
    console.log('clicked on Tanner');
    document.getElementById('about-info-text').innerHTML = TannerBio;
    document.getElementById('about-pic').src = '/Images/Tanner Profile.png';
    window.scrollTo(0, 1200);
});



// CONTACT PAGE

sendButton = document.getElementById('contact-page-send');

sendButton.addEventListener("click", function(){

    document.getElementById('contact-name-input').val() = '';
    document.getElementById('contact-email-input').val() = '';
    document.getElementById('contact-message-input').val() = '';
});
