$(document).ready(function () {

    // Put your offset checking in a function
    function checkOffset() {
        if ($(".navbar").offset().top > 50) {
            $("#ftco-nav").removeClass("show");
        }
    }
    // Run it when the page loads
    checkOffset();
    // Run function when scrolling
    $(window).scroll(function () {
        checkOffset();
    });
});