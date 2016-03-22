//chowanie tekstu
$(document).ready(function(){
    $("#Schowaj").click(function(){
        $("#hide").toggle();
    });
});

//panelek
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

//animacja kwadracika
$(document).ready(function(){
$("#2").click(function(){
    var div = $("#kwadrat");
    div.animate({left: '600px',height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
	});
});  

//ukrywanie tekstu
$(document).ready(function(){
    $("#Ukrywanie").click(function(){
        $("#Ukryw").hide("slow", function(){
            alert("Ukryty mozesz byc spokojny");
        });
    });
});

//Usuwanie tekstu
$(document).ready(function(){
    $("#usun").click(function(){
        $("#div1").empty();
		alert("Jak mogles usunac tekst :<");
    });
});



