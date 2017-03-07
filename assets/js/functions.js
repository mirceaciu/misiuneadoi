// $(".front-post-content p:nth-child(2)").nextAll().hide();

$(".read-all-btn").click(function(){
    $(".front-post-content p:nth-child(2)").nextAll().toggle({
      duration: 600
    });

    $(".read-all-btn").toggleClass("go-right");

    $(".show-comments-btn").toggleClass("go-visible")

});
