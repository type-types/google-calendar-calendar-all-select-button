// Open links in new tab when clicked
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.link-item');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      chrome.tabs.create({ url: url });
    });
  });
});

