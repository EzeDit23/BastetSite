

var barra_menu = $("#barra_menu");
var main = $(".banner_cont");
var scroll;
var menu_bar = $("#menu_bar");


$(window).scroll(function(){
    scroll = $(window).scrollTop();

    if (scroll > 100 ){
        $("#barra_menu").css("background", "teal");
        $("#barra_menu").css("transition", "0.8s");
        $(".a_black").css("color","white");
        $(".a_black").css("transition", "0.3s");
        $(".banner_cont").css("opacity","0");
        $(".banner_cont").css("transition","opacity 1s");
  
    } else {
        $("#barra_menu").css("background","transparent");
        $("a").css("color","white");
        $(".banner_cont").css("opacity","100");

    };

    
});



/*"linear-gradient(teal 40%, rgba(0, 128, 128, 0.8)"*/
