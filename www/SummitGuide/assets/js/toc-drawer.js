/*
  Summit Guide — Table of Contents drawer keyboard and screen-reader behaviour.

  - Open/close via trigger button (click, Enter, Space)
  - Close via Escape key
  - Close via dedicated close button inside the drawer
  - Tab switching between Contents and Key panels
  - Focus trap when drawer is open
  - Restore focus to trigger when drawer closes
*/

(function () {
  var trigger = document.querySelector('.sg-toc-trigger');
  var drawer = document.getElementById('sg-toc-drawer');
  if (!trigger || !drawer) return;

  var closeButton = drawer.querySelector('.sg-toc-drawer__close');
  var tabs = drawer.querySelectorAll('.sg-toc-drawer__tab');
  var panelContents = drawer.querySelector('#sg-toc-panel-contents');
  var panelKey = drawer.querySelector('#sg-toc-panel-key');

  // All focusable elements inside the drawer (for focus trapping).
  function getFocusableElements() {
    var sel =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(drawer.querySelectorAll(sel)).filter(function (el) {
      return el.offsetParent !== null;
    });
  }

  function open() {
    drawer.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    // Focus the first tab or close button after render.
    var focusTarget = closeButton || tabs[0];
    if (focusTarget) {
      requestAnimationFrame(function () {
        focusTarget.focus();
      });
    }
  }

  function close() {
    drawer.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }

  function switchTab(activeTab) {
    tabs.forEach(function (tab) {
      var controls = document.getElementById(
        tab.getAttribute('aria-controls')
      );
      var selected = tab === activeTab;
      tab.setAttribute('aria-selected', String(selected));
      if (controls) {
        controls.hidden = !selected;
      }
    });
  }

  // Trigger: open/close.
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    if (drawer.hidden) {
      open();
    } else {
      close();
    }
  });

  trigger.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (drawer.hidden) {
        open();
      } else {
        close();
      }
    }
  });

  // Close button.
  if (closeButton) {
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      close();
    });
  }

  // Tab switching.
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      switchTab(tab);
    });
    tab.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        switchTab(tab);
      }
    });
  });

  // Keyboard: Escape closes.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) {
      e.preventDefault();
      close();
    }
  });

  // Focus trap.
  drawer.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var focusable = getFocusableElements();
    if (focusable.length === 0) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
