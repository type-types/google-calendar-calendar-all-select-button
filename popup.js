// 링크 클릭 시 새 탭에서 열기
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

