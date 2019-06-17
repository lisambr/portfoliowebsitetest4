const fly = document.querySelector('#bird');
const audio = document.querySelector('#piopio');
const slap = document.querySelector('#slap');

let paused = true;
let move;

fly.addEventListener('click', playgame);

function moveBird() {

    fly.style.backgroundImage = ""
    fly.style.left = (Math.random() * 90) + "vw";
    fly.style.top = (Math.random() * 90) + "vh";
    fly.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
}

function kill() {
    fly.style.backgroundImage = "url('/dwlfiles/020302_deadbird/deadbirdsprite.png')"

}

function playgame() {
    if (paused) {
        moveBird();
        piopio.play();
        /*slap.paused();*/
        move = setInterval(moveBird, 1000)
        paused = false;
    } else {
        audio.pause();
        slap.play();
        clearInterval(move);
        paused = true;
        kill()
        console.log ("true")
}
}
