
var empresa = $(".empresa");
var personal = $(".personal");
var bandas = $(".bandas");

/*EMPRESA*/
empresa.mouseover(function(){
    $(".empresa").css("cursor", "pointer");
    $(".empresa").css("filter", "grayscale(0%)");
    $(".empresa").css("transition","0.5s")
    $(".empresa h2").css("font-weight", "bold")
    $("#contenido-empresas").css("display", "inline");
});

empresa.mouseout(function(){
    $(".empresa").css("filter", "grayscale(100%)");
    $("#contenido-empresas").css("display", "none");
});

/*PERSONAL*/
personal.mouseover(function(){
    $(".personal").css("cursor", "pointer");
    $(".personal").css("filter", "grayscale(0%)");
    $(".personal").css("transition","0.5s")
});

personal.mouseout(function(){
    $(".personal").css("filter", "grayscale(100%)");
});

/*BANDAS*/
bandas.mouseover(function(){
    $(".bandas").css("cursor", "pointer");
    $(".bandas").css("filter", "grayscale(0%)");
    $(".bandas").css("transition","0.5s")
});

bandas.mouseout(function(){
    $(".bandas").css("filter", "grayscale(100%)");
});
