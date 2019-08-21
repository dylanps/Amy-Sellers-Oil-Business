console.log('analytics.js loaded!');

document.getElementById('home-blog-button').addEventListener("click",function(e) {
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