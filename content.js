// content.js

(function () {
  // Toggle all calendars function
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

  // Add ✓ icon to "My calendars" header
  function addIcon() {
    const titleDiv = document.querySelector('div.aIwHYe'); // "My calendars" text
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

  // Initial run
  addIcon();

  // Re-add icon when DOM changes
  const observer = new MutationObserver(() => {
    addIcon();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();

