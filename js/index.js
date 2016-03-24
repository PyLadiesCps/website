$(".inline-menu li").each(function() {
    $(this).click(function() {
        var id = "." + $(this).attr("id");
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 800);
    });
});

