

//code that changes text based on clicking a profile image.

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

Amy.addEventListener('click', (e) => {

    console.log('clicked on Amy');

    document.getElementById('about-info-text').innerHTML = 'Insert Amy-bio here';
});

Glen.addEventListener('click', (e) => {

    console.log('clicked on Glen');

    document.getElementById('about-info-text').innerHTML = 'Insert Glen-bio here';
});

Ivy.addEventListener('click', (e) => {

    console.log('clicked on Ivy');

    document.getElementById('about-info-text').innerHTML = 'Insert Ivy-bio here';
});

Chelsea.addEventListener('click', (e) => {

    console.log('clicked on Chelsea');

    document.getElementById('about-info-text').innerHTML = 'Insert Chelsea-bio here';
});

Tim.addEventListener('click', (e) => {

    console.log('clicked on Tim');

    document.getElementById('about-info-text').innerHTML = 'Insert Tim-bio here';
});

Megan.addEventListener('click', (e) => {

    console.log('clicked on Megan');

    document.getElementById('about-info-text').innerHTML = 'Insert Megan-bio here';
});

Chad.addEventListener('click', (e) => {

    console.log('clicked on Chad');

    document.getElementById('about-info-text').innerHTML = 'Insert Chad-bio here';
});

Meri.addEventListener('click', (e) => {

    console.log('clicked on Meri');

    document.getElementById('about-info-text').innerHTML = 'Insert Meri-bio here';
});

Dylan.addEventListener('click', (e) => {

    console.log('clicked on Dylan');

    document.getElementById('about-info-text').innerHTML = '<b>Dylan</b> is the engineer and the athlete. After playing hours of sports, he loves using <a href=\'https://www.doterra.com/US/en/p/deep-blue-rub\' target=\'_blank\'>Deep Blue Rub</a>. It relaxes his muscles and gets him back on the court quicker. He also finds himself having trouble sleeping at night due to stuffy noses. Smelling <a href=\'https://www.doterra.com/US/en/p/peppermint-oil\' target=\'_blank\'>Peppermint oil</a> clears his sinuses immediately and makes it easier for him to breath and relax when he is otherwise restless in bed.';
});

Natalie.addEventListener('click', (e) => {

    console.log('clicked on Natalie');

    document.getElementById('about-info-text').innerHTML = 'Insert Natalie-bio here';
});

Katy.addEventListener('click', (e) => {

    console.log('clicked on Katy');

    document.getElementById('about-info-text').innerHTML = 'Insert Katy-bio here';
});

Tanner.addEventListener('click', (e) => {

    console.log('clicked on Tanner');

    document.getElementById('about-info-text').innerHTML = 'Insert Tanner-bio here';
});

//responsive welcome text w/ profile pic

/*
if(screen size is less than [1250] pixels wide) {

    //grab the element and make it center the contents of the child divs.
    const homeProfilePic = document.getElementById(home-greeting)


}
else {
    //keep it the same
}
*/






// example code

// const navlink = document.getElementsByClassName('nav-link');

// navlink[0].addEventListener('hovermouseover', (e) => {

//     console.log(navlink[0]);
//     navlink[0].setAttribute

// });

//function that dynamically adds the product to the users cart.

//all cart 
// class CartManager {
//     constructor() {
        
//     }

//     // cart = [];

//     addtoCart() {
//         // this.cart
//     }
//     removefromCart() {

//     }
//     emptyCart() {
//         //while cart is not empty, remove items (or delete cart?)
//     }
// }

// console.log(CartManager);

// class Product {
//     constructor(id, label, price) {
        
//         //input parameters
//         this.id = id;
//         this.label = label;
//         this.price = price;

//         //other parameters
//         this.quantity = 0;
//         this.favorites = 0;
//         this.reviews = 0;
//         this.comments = [];
//     }
    
// }

// const myBelt = new Product(1, 'belt', 10.00);

// console.log(myBelt);

