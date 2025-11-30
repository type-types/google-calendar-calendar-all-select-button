// content.js

(function () {
  // 전체 토글 함수
  function toggleAll() {
    const panel = document.querySelector('div[role="complementary"].qZvm2d-bN97Pc');
    if (!panel) return;
    const boxes = Array.from(
      panel.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]')
    );
    const anyOff = boxes.some(b => !b.checked);
    boxes.forEach(b => {
      if (anyOff && !b.checked) b.click();       // OFF → ON
      else if (!anyOff && b.checked) b.click();  // ON → OFF
    });
  }

  // My calendars 헤더에 ✓ 아이콘 추가
  function addIcon() {
    const titleDiv = document.querySelector('div.aIwHYe'); // "My calendars" 텍스트
    if (!titleDiv) return;
    const headerBtn = titleDiv.closest('button');
    if (!headerBtn) return;
    if (headerBtn.querySelector('#mycal-check-all')) return;

    const icon = document.createElement('span');
    icon.id = 'mycal-check-all';
    icon.textContent = '✓';
    icon.style.marginLeft = '6px';
    icon.style.cursor = 'pointer';
    icon.style.fontSize = '13px';
    icon.style.opacity = '0.85';
    icon.style.userSelect = 'none';
    icon.onclick = (e) => {
      e.stopPropagation();
      toggleAll();
    };

    const inner = headerBtn.querySelector('.o8t45d') || headerBtn;
    inner.appendChild(icon);
  }

  // 초기 한 번
  addIcon();

  // DOM이 바뀔 때마다 아이콘 없으면 다시 추가
  const observer = new MutationObserver(() => {
    addIcon();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();

