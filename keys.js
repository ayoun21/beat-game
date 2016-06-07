// keys: w=119 s=115 e=101 d=100, k=107 i=105 o=111 l=108 //
/*global $*/

$("body").keypress(function(event) {
    console.log(event);
    if (event.which === 119) {
        $('#w')[0].play();
        $("#w-drum").addClass("light");
        setTimeout(function() {
            $("#w-drum").removeClass("light");
        }, 250);
    }
    if (event.which === 115) {
        $('#s')[0].play();
       $("#s-drum").addClass("light");
        setTimeout(function() {
            $("#s-drum").removeClass("light");
        }, 250); 
    }
    if (event.which === 101) {
        $('#e')[0].play();
        $("#e-drum").addClass("light");
        setTimeout(function() {
            $("#e-drum").removeClass("light");
        }, 250);
    }
    if (event.which === 100) {
        $('#d')[0].play();
        $("#d-drum").addClass("light");
        setTimeout(function() {
            $("#d-drum").removeClass("light");
        }, 250);
    }
    if (event.which === 107) {
        $('#k')[0].play();
        $("#k-drum").addClass("light");
        setTimeout(function() {
            $("#k-drum").removeClass("light");
        }, 250);
    }
    if (event.which === 105) {
        $('#i')[0].play();
        $("#i-drum").addClass("light");
        setTimeout(function() {
            $("#i-drum").removeClass("light");
        }, 250);
    }
    if (event.which === 111) {
        $('#o')[0].play();
        $("#o-drum").addClass("light");
        setTimeout(function() {
            $("#o-drum").removeClass("light");
        }, 250);
    }
    if (event.which === 108) {
        $('#l')[0].play();
        $("#l-drum").addClass("light");
        setTimeout(function() {
            $("#l-drum").removeClass("light");
        }, 250);
    }


});

console.log(('audio'));