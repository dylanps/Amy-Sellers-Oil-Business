console.log('contact-analytics.js loaded!');

document.getElementById('contact-page-send').addEventListener("click", function(e) {
    gtag('event', 'click contact form send', {
        'event_category': 'contact-page',
        'event_label': 'contact-send',
        'value': 'true'
      });
      console.log('fired contact send tag');
});


