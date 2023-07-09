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
  var $swiperSelector = $('.shopSwiper')

  $swiperSelector.each(function (index) {
    var $this = $(this)
    $this.addClass('swiper-slider-' + index)

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 50
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false
    var loop = $this.data('loop') ? $this.data('loop') : false
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2.5
    var spaceBetween = $this.data('space-between') ? $this.data('space-between') : 20

    var swiper = new Swiper('.swiper-slider-' + index, {
      direction: 'horizontal',
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragSize,
      },
    })
  })
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
})
