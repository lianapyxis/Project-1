
window.onload = function menuF() {
    var menu = document.querySelector("#myTopnav");
    menu.onclick = function myFunction() {
    
    if(menu.className === "topnav") {
        menu.className += " responsive";
    } else {
        menu.className = "topnav";
        }
    }

    /*

    var num = 0;
    var imagestwo = [
        "img/slider_1/146600.jpg",
        "img/slider_1/Tenet_wallpaper.jpg",
        "img/slider_1/1606152214_woman.jpg"
    ];
    function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= imagestwo.length) {
        num = 0;
    }
    slider.src = imagestwo[num];
    };
    setInterval(() => next(), 5000);

    */
    
    jQuery(function ($) {
        "use strict";
        let imagestwo = [
            "img/slider_1/146600.jpg",
            "img/slider_1/Tenet_wallpaper.jpg",
            "img/slider_1/1606152214_woman.jpg"
        ];
        let pic = $(".mw-100");

        let i = 0;
        setInterval(function() {
            i = (i + 1) % imagestwo.length;
            $(document).ready(function() {
                pic.fadeOut(1500, () => {
                    pic.attr("src", imagestwo[i]);
                    pic.fadeIn(1500);
                });
            });
        }, 8000);

        var $btnTop = $(".btn-top");
        $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 50){
            $btnTop.fadeIn();
            } else {
             $btnTop.fadeOut();
            }
        });

        $btnTop.on("click", function(){
            $("html,body").animate({scrollTop:0}, 500);
        });

        var header = $(".accordion-header");

        function accordion() {
        $(this).toggleClass("active");
        $(this).next().slideToggle("normal");
        $(".accordion-header").not(this).removeClass("active");
        $(".accordion-header").not(this).next().hide("slow");
        }

        header.click(accordion);

        $(".skillbar").each(function() {
            $(this).find(".skillbar-bar").animate({
                width:$(this).attr("data-percentage")
            }, 5000);
        });

        $(".count").each(function() {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            },{
                duration: 1500,
                easing: "swing",
                step: function(now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
      
}



