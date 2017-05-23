$(function () {
    var pageName = "dashboard";
    $(".sidebarlist li a").click(function () {
        // console.log($(this).attr('pageName'));
        if (!$(this).attr('pageName')) {
            return false;
        } else if (pageName == $(this).attr('pageName')) {
            return false;
        } else {
            pageName = $(this).attr('pageName');
            $(".main_container .wrapper").load("./pages/" + pageName + ".html");
        }

    });
    $(".main_container .wrapper").load("./pages/dashboard.html");
});