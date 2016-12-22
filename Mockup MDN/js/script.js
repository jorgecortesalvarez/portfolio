$(document).ready(function() {
    $('.scroll-to').on('click', function(event){
      event.preventDefault();
      var sectionID = $(this).attr("data-id");
      scrollToID('#' + sectionID, 750);
    });
});
// scroll function
function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({scrollTop:targetOffset}, speed);
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}
