document.addEventListener('DOMNodeInserted', e => {
  if (e.target.className && e.target.className.includes('appbar-guide-notification')) {
    e.target.parentNode.removeChild(e.target);
    console.info('Blocked Appbar Notification');
  }
}, false)