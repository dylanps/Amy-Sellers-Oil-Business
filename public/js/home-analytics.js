console.log('home-analytics.js loaded!');

//Home

document.getElementById('home-blog-button').addEventListener("click", function(e) {
    gtag('event', 'clicked explore blog', {
        'event_category': 'home-page',
        'event_label': 'explore-blog',
        'value': 'true'
      });
    console.log('fired blog button tag');
});

document.getElementById('email-newsletter-form').addEventListener("click", function(e) {
    gtag('event', 'newsletter subscribe', {
        'event_category': 'home-page',
        'event_label': 'subscribe',
        'value': 'true'
      });
      console.log('fired newsletter subscription tag');
});

document.getElementById('explore-button').addEventListener("click", function(e) {
    gtag('event', 'click explore about', {
        'event_category': 'home-page',
        'event_label': 'explore-about',
        'value': 'true'
      });
      console.log('fired explore button tag');
});

document.getElementById('').addEventListener("click", function(e) {
    gtag('event', 'Clicked Home Essentials Kit', {
        'event_category': 'home-page-kits',
        'event_label': 'home essentials',
        'value': 'true'
      });
      console.log('fired home essentials kit tag');
});

document.getElementById('').addEventListener("click", function(e) {
    gtag('event', 'Clicked Aromatouch Diffused Kit', {
        'event_category': 'home-page-kits',
        'event_label': 'Aromatouch Diffused Kit',
        'value': 'true'
      });
      console.log('fired aromatouch diffused kit tag');
});

document.getElementById('').addEventListener("click", function(e) {
    gtag('event', 'Clicked Natural Solutions Kit', {
        'event_category': 'home-page-kits',
        'event_label': 'Natural Solutions Kit',
        'value': 'true'
      });
      console.log('fired natural solutions kit tag');
});

document.getElementById('').addEventListener("click", function(e) {
    gtag('event', 'Clicked Diamond Kit', {
        'event_category': 'home-page-kits',
        'event_label': 'Diamond Kit',
        'value': 'true'
      });
      console.log('fired diamond kit tag');
});

//Essential Oils

//Answers with Amy

//About

