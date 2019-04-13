$(document).ready(function() {

    function BoxToCenter() {
        var scrollDist = $(window).scrollTop();
        var distTop = ($(window).height() - $("#menu_box").height()) / 2 + scrollDist;
        var distLeft = ($(window).width() - $("#menu_box").width()) / 2;
        $("#menu_box").offset({
            top: distTop,
            left: distLeft
        });
    };

    function MenuBoxHide() {
        $("#menu_mask").addClass("mask").fadeOut("slow");
        $("#menu_box").fadeOut("slow");
    };

    $(".menu__article__img").click(function() {
        $("#menu_mask").addClass("mask").fadeIn("slow");
        $("#menu_box").fadeIn("slow");
        $("#box_title").text($(this).children(".menu__article__img__front").children(".menu__article__img__front__text").text());
        $("#box_img_main").attr("src", $(this).children(".menu__article__img__back").children(".img").attr("src"));
        $("#box_text_id").html($("." + $(this).children(".menu__article__img__front").attr("id")).html());
        BoxToCenter();
    });

    $("#closeBtn").click(function() {
        MenuBoxHide();
    });

    $("#menu_mask").click(function() {
        MenuBoxHide();
    });

    $(window).scroll(BoxToCenter);
    $(window).resize(BoxToCenter);
});