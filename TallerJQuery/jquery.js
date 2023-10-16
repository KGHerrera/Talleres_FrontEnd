$(function(){
    $("#btnOscuro").on("click", function(){
        $("body").css("background-color", "black");
        $("h1").css("color", "white");
        $("p").css("color", "white");
    }); 

    $("#btnClaro").on("click", function(){
        $("body").css("background-color", "transparent");
        $("h1").css("color", "inherit");
        $("p").css("color", "inherit");
    }); 
})