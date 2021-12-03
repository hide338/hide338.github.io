'use strict';
{
// ---------------------------------Open Script----------------------------------
  const openTargets = document.querySelectorAll('.js-openTarget');
  window.onload = function() {
    for (let i = 0; i < openTargets.length; i++) {
      openTargets[i].classList.add('open')
    }
  }

// ------------------------------------spMenu Script--------------------------------
  const open = document.getElementById('open'),
          close = document.getElementById('close'),
          overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    open.classList.add('hidden');
    overlay.classList.add('show');
  });

  close.addEventListener('click', () =>{
    open.classList.remove('hidden');
    overlay.classList.remove('show');
  });

// -----------------------------------HeaderLock Script--------------------------
  const headerLockTarget = document.querySelector('.js-headerLock');
  document.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      headerLockTarget.classList.add('lock')
    } else {
      headerLockTarget.classList.remove('lock')
    }
  });

// ---------------------------------Scroll Script-----------------------------------
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

// ------------------------------------SmoothScroll Script-----------------------------
  const smoothBtns = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothBtns.length; i++) {
    smoothBtns[i].addEventListener('click', e => {
      e.preventDefault()

      if (smoothBtns[i].hash === "") {
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        })
      } else {
        const smoothTarget = document.querySelector(smoothBtns[i].hash),
                  adjust = 60,
                  offsetTop = window.pageYOffset + smoothTarget.getBoundingClientRect().top - adjust;
        window.scrollTo({
          top:offsetTop,
          behavior: 'smooth'
        });
        open.classList.remove('hidden');
        overlay.classList.remove('show');
      }
    });
  }

}