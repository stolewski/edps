$(document).ready(function () {
  // main slider

  $('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    //autoplay: true,
    //autoplaySpeed: 5000,
    prevArrow: $('.previous'),
    nextArrow: $('.nextus'),
  });

  // gallery section slider

  $('.gallery-pics').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // comments slider

  $('.comments-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev-comment'),
    nextArrow: $('.next-comment'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // single page slider

  $('.gal-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.single-back'),
    nextArrow: $('.single-ahead'),
  });

  // pop-up full-size pic

  $('.gallery-pics').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
  });

  $('.gal-wrap').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
  });

  // popup workshops

  $(function () {
    $('.osrodek__btn-trans').magnificPopup({
      type: 'inline',
      preloader: false,
      modal: true,
    });
    $(document).on('click', '.close-popup', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });

  if (window.location.hash === '#terminy') {
    $.magnificPopup.open({
      items: {
        src: '.workshops-popup',
      },
    });
  }

  // $(function () {
  //   $('.open-popup').magnificPopup({
  //     type: 'inline',
  //     preloader: false,
  //     modal: true,
  //   });
  //   $(document).on('click', '.close-popup', function (e) {
  //     e.preventDefault();
  //     $.magnificPopup.close();
  //   });
  // });

  // Nav menu

  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.main-menu').addClass('active');
  });
  $('.close').on('click', function (e) {
    e.preventDefault();
    $('.main-menu').removeClass('active');
  });
  $('.menu-btn_mob').on('click', function (e) {
    e.preventDefault();
    $('.main-menu').addClass('active');
  });
  $('.menu__list a').on('click', function (e) {
    $('.main-menu').removeClass('active');
  });
});

// select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName('custom-select');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener('click', closeAllSelect);

// scroll

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.head').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
