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

AmyBio = '<b>Amy</b> is a recovering mother of 10 amazing kids and blessed with 15 grand-children and counting, Amy loves to learn and almost always has a book in hand.  She enjoys scuba-diving in warm water, and exploring new places to learn about the people and plants that live there!  Her favorite oil is the <a href=\'https://www.doterra.com/US/en/p/immortelle-anti-aging-blend?OwnerID=260207\' target=\'_blank\'>Immortelle blend</a> as she strives to age gracefully, but she loves to wake up with <a href=\'http://doterra.com/US/en/p/wild-orange-oil?OwnerID=260207\' target=\'_blank\'>Wild Orange</a> and <a href=\http://doterra.com/US/en/p/peppermint-oil?OwnerID=260207\' target=\'_blank\'>Peppermint</a>, and wonders what she’s drinking without <a href=\http://doterra.com/US/en/p/slim-and-sassy-oil?OwnerID=260207\' target=\'_blank\'>Slim & Sassy</a> in her water bottle.';
GlenBio = '<b>Glen</b> is an amazing husband and hardworking dad, his favorite title is “Papa”.  He loves entertaining the littles, teaching them to collect the eggs, ride the quads, and push him into the nearest body of water.  He loves the Serenity duo - <a href=\'http://doterra.com/US/en/p/doterra-serenity-restful-complex-softgels?OwnerID=260207\' target=\'_blank\'>Serenity softgels</a> and <a href=\'http://doterra.com/US/en/p/doterra-serenity-oil?OwnerID=260207\' target=\'_blank\'>Oil</a> at bedtime to let him drift off to dreamland so he doesn’t miss his morning run. <a href=\'https://www.doterra.com/US/en/p/copaiba-softgels?OwnerID=260207\' target=\'_blank\'>Copaiba</a> is also this “farmer’s” friend.';
IvyBio = '<b>Ivy</b> has her hands full with 4 very active boys and her own blog: <a href="https://www.thegreensmoothiemama.com" target="_blank">thegreensmoothiemomma.com</a> (check it out!). She has been a Wellness Advocate with Doterra for many years now and knows her stuff! She and her husband thrive on the <a href=\'http://doterra.com/US/en/p/supplements-daily-vitality-doterra-lifelong-vitality-pack?OwnerID=260207\' target=\'_blank\'>Life-long Vitality Pack</a>, <a href=\'http://doterra.com/US/en/p/supplements-digestive-health-digestzen-terrazyme-digestive-enzyme-complex?OwnerID=260207\' target=\'_blank\'>Terrazyme</a>, <a href=\'http://doterra.com/US/en/p/supplements-mito-2-max?OwnerID=260207\' target=\'_blank\'>Mito2Max</a>, and <a href=\'http://doterra.com/US/en/p/lemon-oil?OwnerID=260207\' target=\'_blank\'>Lemon</a> oil. Her kids benefit regularly from <a href=\'http://doterra.com/US/en/p/digestzen-oil?OwnerID=260207\' target=\'_blank\'>Digestzen</a>, <a href=\'http://doterra.com/US/en/p/on-guard-oil?OwnerID=260207\' target=\'_blank\'>On Guard</a>, and <a href=\'https://www.doterra.com/US/en/p/doterra-calmer-blend?OwnerID=260207\' target=\'_blank\'>Calmer</a>.';
TimBio = '<b>Tim</b> is the Nurse Practitioner. When he\'s not traveling the world, he is taking care of people. He appreciates <a href=\'http://doterra.com/US/en/p/onguard-protective-blend-softgel?OwnerID=260207\' target=\'_blank\'>On-Guard Softgels</a> around cold and flu season! Plus with all the typing that he has to do, it’s nice to rub some <a href=\'http://doterra.com/US/en/p/deep-blue-rub?OwnerID=260207\' target=\'_blank\'>Deep Blue Rub</a> on his hands at the end of a long day.';
ChelseaBio = '<b>Chelsea</b> is a Marriage and Family Therapist and recently participated in her first pageant as Mrs. Tennessee! Chelsea has always had big goals for herself and her family, and they are always on the go! <a href=\'http://doterra.com/US/en/p/lavender-oil?OwnerID=260207\' target=\'_blank\'>Lavender</a> helps everybody calm down at bedtime so they can rest up for the next day’s fun.';
MeganBio = '<b>Megan</b> is my glamour girl. She’s a Make Up Artist and loves all things with bling.  <a href=\'http://doterra.com/US/en/p/lemon-oil?OwnerID=260207\' target=\'_blank\'>Lemon Oil</a> is Megan’s best friend as she works to support liver health and keep up with her busy brood. They live abroad, working for the State Department, so they love having their emergency oils kit close at hand to care for their 4 kiddos.  With lots of travel on the agenda, <a href=\'http://doterra.com/US/en/p/doterra-touch-digestzen-essential-oil-blend?OwnerID=260207\' target=\'_blank\'>Digestzen Touch</a> keeps the motion sickness at bay and tummies calm & happy.';
ChadBio = 'Soon to be Dr. <b>Chad</b>, D.D.S. lives with his family in Las Vegas while he finishes dental school. He uses <a href=\'http://doterra.com/US/en/p/onguard-protective-blend-softgel?OwnerID=260207\' target=\'_blank\'>On-Guard Softgels</a> and <a href=\'https://www.doterra.com/US/en/p/doterra-onguard-mouthwash?OwnerID=260207\' target=\'_blank\'>On Guard Mouthwash</a> to quickly combat sore throats and prevent colds. When test time comes around, <a href=\'http://doterra.com/US/en/p/pasttense-oil?OwnerID=260207\' target=\'_blank\'>Past Tense</a> helps his brain to wake up, focus, and calm his nerves. With very limited vacation time, he relies on essential oils to keep him fit for another day of school.';
MeriBio = '<b>Meri</b> is our “boho” chick, and has loved exploring ideas and cities before “finding herself” as an X-ray Tech and Medical Assistant. With gluten sensitivity issues, her favorite products are <a href=\'http://doterra.com/US/en/p/supplements-digestive-health-digestzen-terrazyme-digestive-enzyme-complex?OwnerID=260207\' target=\'_blank\'>Terrazyme</a> and <a href=\'http://doterra.com/US/en/p/digestzen-oil?OwnerID=260207\' target=\'_blank\'>Digestzen</a>, but she also loves <a href=\'http://doterra.com/US/en/p/clarycalm-blend-oil?OwnerID=260207\' target=\'_blank\'>Clary Calm</a> and <a href=\'http://doterra.com/US/en/p/elevation-oil?OwnerID=260207\' target=\'_blank\'>Elevation</a>!';
DylanBio = '<b>Dylan</b> is the engineer and the athlete. After playing hours of sports, he loves using <a href=\'http://doterra.com/US/en/p/deep-blue-rub?OwnerID=260207\' target=\'_blank\'>Deep Blue Rub</a>. It relaxes his muscles and gets him back on the court quicker. He also finds himself having trouble sleeping at night due to stuffy noses. Smelling <a href=\'https://www.doterra.com/US/en/p/peppermint-oil?OwnerID=260207\' target=\'_blank\'>Peppermint oil</a> clears his sinuses immediately and makes it easier for him to breath and relax when he is otherwise restless in bed.';
NatalieBio = '<b>Natalie</b> just graduated in Special Education and started her first teaching job. Cooling <a href=\'http://doterra.com/US/en/p/peppermint-oil?OwnerID=260207\' target=\'_blank\'>Peppermint Oil</a> eases away head tension and helps her “pep up” so she’s ready to play with friends after work or stay up late reading!';
KatyBio = '<b>Katy</b> is a reader with an ambition to be an editor. Katy loves <a href=\'http://doterra.com/US/en/p/balance-grounding-blend-oil?OwnerID=260207\' target=\'_blank\'>Balance</a> and <a href=\'http://doterra.com/US/en/p/lavender-oil?OwnerID=260207\' target=\'_blank\'>Lavender</a> to help manage college stresses. She has the travel bug. Katy has traveled to London, Frankfurt, Amman, Jerusalem, and Doha in recent years.  She remains the only family member to step foot in Iceland!';
TannerBio = '<b>Tanner</b> is our fun-loving, easy-going, 17 year old. He loves music, friends, and school!  He dances his way down the halls, and any other time he gets the chance.  With his Down syndrome diagnosis, Tanner has benefitted from <a href=\'http://doterra.com/US/en/p/frankincense-oil?OwnerID=260207\' target=\'_blank\'>Frankincense</a> daily since he was a baby (he needs those anti-oxidants!), but he loves <a href=\'http://doterra.com/US/en/p/in-tune-oil?OwnerID=260207\' target=\'_blank\'>Intune</a> to keep him focused on learning and Triease to breathe freely all year round.';

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
    window.scrollBy(0,-60);
});

GlenMobile.addEventListener("click", function() {
    console.log('clicked on Glen');
    document.getElementById('about-info-text').innerHTML = GlenBio;
    document.getElementById('about-pic').src = '/Images/Glen Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

IvyMobile.addEventListener("click", function() {
    console.log('clicked on Ivy');
    document.getElementById('about-info-text').innerHTML = IvyBio;
    document.getElementById('about-pic').src = '/Images/Ivy Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

ChelseaMobile.addEventListener("click", function() {
    console.log('clicked on Chelsea');
    document.getElementById('about-info-text').innerHTML = ChelseaBio;
    document.getElementById('about-pic').src = '/Images/Chelsea Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

TimMobile.addEventListener("click", function() {
    console.log('clicked on Tim');
    document.getElementById('about-info-text').innerHTML = TimBio;
    document.getElementById('about-pic').src = '/Images/Tim Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

MeganMobile.addEventListener("click", function() {
    console.log('clicked on Megan');
    document.getElementById('about-info-text').innerHTML = MeganBio;
    document.getElementById('about-pic').src = '/Images/Megan Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

ChadMobile.addEventListener("click", function() {
    console.log('clicked on Chad');
    document.getElementById('about-info-text').innerHTML = ChadBio;
    document.getElementById('about-pic').src = '/Images/Chad Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

MeriMobile.addEventListener("click", function() {
    console.log('clicked on Meri');
    document.getElementById('about-info-text').innerHTML = MeriBio;
    document.getElementById('about-pic').src = '/Images/Meri Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

DylanMobile.addEventListener("click", function() {
    console.log('clicked on Dylan');
    document.getElementById('about-info-text').innerHTML = DylanBio;
    document.getElementById('about-pic').src = '/Images/Dylan Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

NatalieMobile.addEventListener("click", function() {
    console.log('clicked on Natalie');
    document.getElementById('about-info-text').innerHTML = NatalieBio;
    document.getElementById('about-pic').src = '/Images/Natalie Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});

KatyMobile.addEventListener("click", function() {
    console.log('clicked on Katy');
    document.getElementById('about-info-text').innerHTML = KatyBio;
    document.getElementById('about-pic').src = '/Images/Katy Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60); 
});

TannerMobile.addEventListener("click", function() {
    console.log('clicked on Tanner');
    document.getElementById('about-info-text').innerHTML = TannerBio;
    document.getElementById('about-pic').src = '/Images/Tanner Profile.png';
    document.getElementById('about-person').scrollIntoView();
    window.scrollBy(0,-60);
});