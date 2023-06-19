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
})
