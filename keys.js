// keys: w=119 s=115 e=101 d=100, k=107 i=105 o=111 l=108 //
/*global $*/

("body").keypress(function(event) {
    console.log(event);
    if (event.which === 119) {
        ('#w')[0].play();
    }
    if (event.which === 119) {
        ('#s')[0].play();
    }
    if (event.which === 101) {
        ('#e')[0].play();
    }
    if (event.which === 100) {
        ('#d')[0].play();
    }
    if (event.which === 107) {
        ('#k')[0].play();
    }
    if (event.which === 105) {
        ('#i')[0].play();
    }
    if (event.which === 111) {
        ('#o')[0].play();
    }
    if (event.which === 108) {
        ('#l')[0].play();
    }


});

console.log(('audio'));