// enter button
$(document).on('click','#enter',function(e) {
    $("#halfsParent").hide();
    $("body").attr("style", "background-color: white !important;");
    $("#portfolio").show();
    animatePictures();
});

function animatePictures() {
    $("#portfolio-footer").delay(1000).show(0);
   jQuery('.portfolio-picture').each(function(i) {
      jQuery(this).delay(i * 500).fadeIn(5000);
    });
}
//jQuery(window).load(function($) { animatePictures(); });