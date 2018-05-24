$(function () {
    // Set defaults on page load
    var curPage = "";
    var a = "";
    $("#Portfolio").show();
    curPage = "Portfolio";
    

    // Change page when navigating menu
    $("#menu a").click(function () {
        // Change page
        if (curPage.length) {
            $("#" + curPage).hide();
        }
        curPage = $(this).data("page");
        $("#" + curPage).fadeIn('slow');
        // Change Menu Style
        $("#menu").each(function (index, element) {
            // element == this
            $(this).find("a").removeClass("nav-active");
            $(this).find("a").addClass("nav-inactive");
        });
        $(this).removeClass("nav-inactive");
        $(this).addClass("nav-active");
    });
});
