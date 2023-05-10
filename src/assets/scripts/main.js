/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
;+(function () {
  const university = 'UOC'
  console.log(`Hello, ${university}!`)
})()

$(document).ready(function () {
  $('img').click(function () {
    var t = $(this).attr('src')
    $('.modal-body').html("<img src='" + t + "' class='modal-img'>")
    $('#myModal').modal()
  })

  $('video').click(function () {
    var v = $('video > source')
    var t = v.attr('src')
    $('.modal-body').html(
      "<video class='model-vid' controls><source src='" +
        t +
        "' type='video/mp4'></source></video>"
    )
    $('#myModal').modal()
  })
}) //EOF Document.ready

// window.onscroll = function () {
//   scrollFunction()
// }

// function scrollFunction () {
//   if (window.scrollY > window.innerHeight) {
//     document.getElementById('navbar').style.backgroundColor = '#49879e'
//   } else {
//     document.getElementById('navbar').style.backgroundColor = '#314963'
//   }
// }
