$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = [$(".section2 .about-wrapper"),
        $(".section1 .skills-wrapper"),
        $(".section2 .projects-wrapper"),
        $(".section1 .projects-wrapper"),
        $(".section2 #contact-form"),
    ];

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});