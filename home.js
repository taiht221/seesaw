

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
    if (window.location.pathname === '/' && window.location.search === '') {
      if ($(this).scrollTop() >= 200) {
        $('.header').addClass('active')
      } else {
        $('.header').removeClass('active')
      }
    } else {
      $('.header').addClass('active')
    }
  }
  menuTop()
  $(window).scroll(menuTop)
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active')
    $('.menu-right').toggleClass('active')
    $('#banner-input').toggleClass('active')
  })
})
