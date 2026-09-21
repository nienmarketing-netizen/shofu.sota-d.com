// Force cursor pointer
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
      button, a, [role="button"], .cursor-pointer, [class*="cursor-pointer"],
      button *, a *, [role="button"] *, .cursor-pointer *, [class*="cursor-pointer"] * {
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('mouseover', function(e) {
        let target = e.target as HTMLElement | null;
        while(target && target !== document.body && target !== (document as unknown as HTMLElement)) {
          if (
            target.tagName === 'BUTTON' || 
            target.tagName === 'A' || 
            target.getAttribute('role') === 'button' ||
            (target.className && typeof target.className === 'string' && target.className.includes('cursor-pointer'))
          ) {
            target.style.setProperty('cursor', 'pointer', 'important');
            Array.from(target.querySelectorAll('*')).forEach(child => {
               (child as HTMLElement).style.setProperty('cursor', 'pointer', 'important');
            });
            break;
          }
          target = target.parentElement;
        }
    });
}
