//HERO//
const HERO = document.querySelector("#bird");

//01MOVE LEFT TO RIGHT//
const MOVEBUTTON = document.querySelector("#btn01");
MOVEBUTTON.addEventListener("click", move);

function move(){
    HERO.classList = "";
    HERO.classList.add("moveLeftToRight");
}

//02BACKGROUND//
const BGBUTTON = document.querySelector("#btn02");
const BUTTONGO = ['bg_for_main_default','bg_for_main_beach','bg_for_main_mountain'];
var BUTTONCLASS = 0;
BGBUTTON.addEventListener("click",bgchange);

function bgchange(){
    const STARTBG = document.querySelector("div");
    STARTBG.classList.toggle("#bird");


    BUTTONCLASS++;

    if (BUTTONCLASS > 2){
        BUTTONCLASS = 0;
    }
    STARTBG.className = BUTTONGO[BUTTONCLASS];
}

//03MOVE FROM 30//

const MOVEFROM30BUTTON = document.querySelector("#btn03");
console.log (MOVEFROM30BUTTON);
MOVEFROM30BUTTON.addEventListener("click",moveFrom30);

function moveFrom30(){
    HERO.classList = "";
    HERO.classList.add("moveFrom30");
    console.log(START30);
}
//04JUMP ONE TIME//

const ONEJUMPBUTTON = document.querySelector("#btn04");
console.log (ONEJUMPBUTTON);
ONEJUMPBUTTON.addEventListener("click",onejump);

function onejump(){
    HERO.classList = "";
    HERO.classList.add("onejump");
    console.log(STARTONEJUMP);
}

//05JUMPING//

const JUMPINGBUTTON = document.querySelector("#btn05");
console.log (JUMPINGBUTTON);
JUMPINGBUTTON.addEventListener("click",jumping);

function jumping(){
    HERO.classList = "";
    HERO.classList.add("jumping");
    console.log(STARTJUMPING);
}

//06FADE//

const FADEBUTTON = document.querySelector("#btn06");
FADEBUTTON.addEventListener("click",fading);

function fading(){
    HERO.classList = "";
    HERO.classList.add("fading");

}

//07GLOW//

const GLOWBUTTON = document.querySelector("#btn07");
GLOWBUTTON.addEventListener("click",glowing);

function glowing(){
    HERO.classList = "";
    HERO.classList.add("glowing");

}

//08SHAKE//

const SHAKEBUTTON = document.querySelector("#btn08");
SHAKEBUTTON.addEventListener("click",shaking);

function shaking(){
    HERO.classList = "";
    HERO.classList.add("shaking");
}

//09FALL DOWN//

const FALLBUTTON = document.querySelector("#btn09");
FALLBUTTON.addEventListener("click", falling);

function falling(){
    HERO.classList = "";
    HERO.classList.add("falling");
}

//10FLY//

const FLYBUTTON = document.querySelector("#btn10");
FLYBUTTON.addEventListener("click", flying);

function flying(){
    HERO.classList = "";
    HERO.classList.add("flying");``
}
