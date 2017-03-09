// $(".front-post-content p:nth-child(2)").nextAll().hide();

$(".read-all-btn").click(function(){
    $(".front-post-content p:nth-child(2)").nextAll().toggle({
      duration: 600
    });

    $(".read-all-btn").toggleClass("go-right");

    $(".show-comments-btn").toggleClass("go-visible")

});

function init() {
  var imagini = document.getElementsByClassName('post-image');
  for (var i = 0, j = imagini.length; i < j; i++) {
    var container_img = imagini[i].parentNode;
    container_img.style.width = '100%';
  }
}

window.onload = init;
