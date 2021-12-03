'use strict';

{
// --------------------------Open Script------------------------
  const openTargets = document.querySelectorAll('.js-openTarget');
  window.onload = function() {
    for (let i = 0; i < openTargets.length; i++) {
      openTargets[i].classList.add('open')
    }
  }
}

(() => {
  // -------------------------spmenu script---------------------
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const spMenu = document.getElementById('sp-menu');
    const mask = document.getElementById('mask');
  
    open.addEventListener('click', () => {
      spMenu.classList.add('active');
      mask.classList.add('active');
    });
  
    close.addEventListener('click', () => {
      spMenu.classList.remove('active');
      mask.classList.remove('active');
    });
  
    mask.addEventListener('click', function() {
      this.classList.remove('active');
      spMenu.classList.remove('active');
    });
  
})();


// ------------------------------PopUp Action----------------------------
(() => {

  class PopUp {
    constructor(obj){

      const elm = document.getElementById(obj.elmName);
      const trigger = elm.getElementsByClassName(obj.triggerName);

      for (let i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener('click', e => this.clickHandler(e));
      }
    }
    clickHandler = function(e){
      e.preventDefault();
      const target = e.currentTarget;
      const content = target.nextElementSibling;
      const active = document.getElementsByClassName('active');
  
      for (let i = 0; i < active.length; i++) {
        if (active[i].classList.contains('active')){
          active[i].classList.remove('active');
        }
      }
      if (target.classList.contains('active')) {
        target.classList.remove('active');
      } else if(content.classList.contains('active')) {
        content.classList.remove('active');
      } else {
        content.classList.add('active');
      }
    };
  }

  const skillAction = new PopUp({
    elmName: 'skill',
    triggerName: 'skill'
  });

  const skillDetailAction = new PopUp({
    elmName: 'skill',
    triggerName: 'skill-detail'
  });

})();

{
// ----------------------------mainvisual script-------------------------
  const mainvisual = document.getElementById('mainvisual');
  const images = ["img/top01.jpg","img/top02.jpg","img/top03.jpg","img/top04.jpg","img/top05.jpg","img/top06.jpg"];
  let imgIndex = 0

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    const li = document.createElement('li');
    mainvisual.appendChild(li);
    li.appendChild(img);
    if (images[i] === images[0]) {
      li.classList.add('fadein');
    }
  }

  const mainimage = document.querySelectorAll('#mainvisual > li');
  let loopCount = 0;

  function slideshow() {
    if (loopCount === 0) {
      loopCount++
    } else {
      mainimage[imgIndex].classList.remove('fadein')
      if (imgIndex === images.length - 1) {
        imgIndex = 0;
      } else {
        imgIndex++
      }
      mainimage[imgIndex].classList.add('fadein')
    }
    setTimeout(slideshow, 5000);
  }
  slideshow();
}

{
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
        if(scrollTargets[i].classList.contains('hidden')) {
          scrollTargets[i].classList.remove('hidden')
        }
      }
    }
});
}

{
// ------------------------------------SmoothScroll Script-----------------------------
  const smoothBtns = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothBtns.length; i++) {
    smoothBtns[i].addEventListener('click', e => {
      e.preventDefault()

      const mask = document.getElementById('mask');
      const active = document.querySelector('.active');

      if (smoothBtns[i].hash === "") {
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        })
      } else {
        const smoothTarget = document.querySelector(smoothBtns[i].hash),
                  adjust = 80,
                  offsetTop = window.pageYOffset + smoothTarget.getBoundingClientRect().top - adjust;
        window.scrollTo({
          top:offsetTop,
          behavior: 'smooth'
        });
        mask.classList.remove('active');
        active.classList.remove('active');
      }
    });
  }
}