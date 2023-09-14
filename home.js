$(document).ready(function () {
  AOS.init()
  var idInput = 0
  var noteList = document.querySelectorAll('.note-list')

  $('#banner-form').on('submit', function (e) {
    e.preventDefault()
    // console.log(noteList[idInput])
    console.log($('input:first').val())
    noteList[idInput].innerHTML = `<p class="note-text">${$('input:first').val()}</p>`
    idInput++
    $('input:first').val('')
    console.log(idInput)
    if (idInput == 10) idInput = 0
  })
  function menuTop() {
    if ($(this).scrollTop() >= 300) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  }
  menuTop()
  $(window).scroll(menuTop)
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active')
    $('.menu-right').toggleClass('active')
    $('#banner-input').toggleClass('active')
  })
  // $(".solution-card").hover(function () {
  //   $(".solution-card p").css("color", "red");
  //   // $(this).fadeIn(500);
  // });
  // var $swiperSelector = $('.shopSwiper')

  // $swiperSelector.each(function (index) {
  //   var $this = $(this)
  //   $this.addClass('swiper-slider-' + index)

  //   var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50
  //   var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false
  //   var loop = $this.data('loop') ? $this.data('loop') : false
  //   var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4
  //   var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3
  //   var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2.5
  //   var spaceBetween = $this.data('space-between') ? $this.data('space-between') : 20

  //   var swiper = new Swiper('.swiper-slider-' + index, {
  //     direction: 'horizontal',
  //     loop: loop,
  //     freeMode: freeMode,
  //     spaceBetween: spaceBetween,
  //     breakpoints: {
  //       1920: {
  //         slidesPerView: slidesDesktop,
  //       },
  //       992: {
  //         slidesPerView: slidesTablet,
  //       },
  //       320: {
  //         slidesPerView: slidesMobile,
  //       },
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //       draggable: true,
  //       dragSize: dragSize,
  //     },
  //   })
  // })
  var swiper = new Swiper('.feedback-slide', {
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: false,
    slidesPerGroup: 3,
    slidesPerView: 3,
  })
  var paginationElement2 = $('.shopSwiper .swiper-pagination')
  var swiper2 = new Swiper('.shopSwiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  swiper2.on('slideChange', function () {
    paginationElement2.hide()
    setTimeout(function () {
      paginationElement2.show()
    }, 200)
  })
  var paginationElement = $('.bookSwiper .swiper-pagination')
  var swiper3 = new Swiper('.bookSwiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  swiper3.on('slideChange', function () {
    paginationElement3.hide()
    setTimeout(function () {
      paginationElement3.show()
    }, 200)
  })
  var paginationElement = $('.bookSwiper2 .swiper-pagination')
  var swiper4 = new Swiper('.bookSwiper2', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  // When the slide changes, hide the pagination.
  swiper4.on('slideChange', function () {
    paginationElement.hide()
    setTimeout(function () {
      paginationElement.show()
    }, 200)
  })

  // After 1 second, show the pagination.

  var swiper = new Swiper('.similar-slide', {
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: false,
    slidesPerGroup: 3,
    slidesPerView: 3,
  })
  var img

  $('.game-card img').hover(
    function () {
      img = $(this)
      img.attr('src', img.attr('data-gd'))
    },
    function () {
      img.attr('src', img.attr('data-orig'))
    }
  )
  $('.blog-topic').hover(
    function () {
      $('.blog-title', this).addClass('active')
      $('.blog-title', this).removeClass('visible')
    },
    function () {
      $('.blog-title', this).removeClass('active')
      $('.blog-title', this).addClass('visible')
    }
  )
  var swiper = new Swiper(".blogDetailSwiper", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    centeredSlides: true,
    freeMode: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    autoplay: true,
    grabCursor: true

  });


  if (location.pathname != "/") $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');

})
