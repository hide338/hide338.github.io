'use strict';

{
  const openTargets = document.querySelectorAll('.js-openTarget');
  window.onload = function() {
    for (let i = 0; i < openTargets.length; i++) {
      openTargets[i].classList.add('open')
    }
  }

  const scrollTargets = document.querySelectorAll('.js-scrollTarget');
  document.addEventListener('scroll', () => {
    for (let i = 0; i < scrollTargets.length; i++) {
      const getTargetTop = scrollTargets[i].getBoundingClientRect().top,
            getTargetHight = scrollTargets[i].clientHeight,
            getTargetDistance = getTargetTop + getTargetHight * .3,
            windowHight = window.innerHeight;
      if (windowHight > getTargetDistance) {
        scrollTargets[i].classList.add('scroll')
      }
    }
  });
}