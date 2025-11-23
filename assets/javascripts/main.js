---
---

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

var myWrapper = document.querySelector('.wrapper');
var myMenu = document.querySelector('.sidebar');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');

// Toggle sidebar visibility
function toggleClassMenu() {
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');
  } else {
    myMenu.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');
  }
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}

// Theme toggle functionality - Initialize immediately to prevent flash
(function() {
  const root = document.documentElement;
  
  // Apply stored preference or system preference immediately
  const stored = localStorage.getItem('site-theme');
  let currentTheme = stored;
  
  if (!stored) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
  }
  
  root.setAttribute('data-theme', currentTheme);
  
  // Initialize theme toggle button after DOM loads
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    updateThemeIcon(currentTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
      const current = root.getAttribute('data-theme');
      const newTheme = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('site-theme', newTheme);
      currentTheme = newTheme;
      updateThemeIcon(newTheme);
    });
    
    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
      const iconLight = themeToggle.querySelector('.theme-icon-light');
      const iconDark = themeToggle.querySelector('.theme-icon-dark');
      if (iconLight && iconDark) {
        if (theme === 'dark') {
          iconLight.style.display = 'none';
          iconDark.style.display = 'inline';
        } else {
          iconLight.style.display = 'inline';
          iconDark.style.display = 'none';
        }
      }
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
  
  // Listen for system theme changes (only if no stored preference)
  if (window.matchMedia && !stored) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('site-theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        currentTheme = newTheme;
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
          const iconLight = themeToggle.querySelector('.theme-icon-light');
          const iconDark = themeToggle.querySelector('.theme-icon-dark');
          if (iconLight && iconDark) {
            if (newTheme === 'dark') {
              iconLight.style.display = 'none';
              iconDark.style.display = 'inline';
            } else {
              iconLight.style.display = 'inline';
              iconDark.style.display = 'none';
            }
          }
        }
      }
    });
  }
})();
