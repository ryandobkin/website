var id = setInterval(frame, 5);
var elem = document.getElementById("title_animation");


function fade_in() {
    if (elem.opacity == 100){
        clearInterval(id);
    } else {
        elem.opacity += 10;
    }
}