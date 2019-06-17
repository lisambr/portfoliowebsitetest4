//Define Elements

//Scenes

//Scene1 Elements
const scene1 = document.querySelector("#scene1");
const scene1BT = document.querySelector("#scene1bt");
const scene1TxtBubble = document.querySelector("#textscene1")

//Scene2 Elements
const scene2 = document.querySelector("#scene2");
const scene2SpaceShip = document.querySelector("#scene2spaceship");
const scene2BT = document.querySelector("#scene2BT");

//Scene3 Elements
const scene3 = document.querySelector("#scene3");
const startPage = document.querySelector("#startpage")
const endPage = document.querySelector("#endpage")
const main = document.querySelector("#main");
const controlBox = document.getElementById("controlbox");
const startBtnBox = document.getElementById("startBtn")

//Scene4 Elements
const scene4 = document.querySelector("#scene4");
const cupboard = document.querySelector("#cupboard")
const stone = document.querySelector("#stone")
const dustbin = document.querySelector("#dustbin")
const scene4txt = document.querySelector("#scene4txt")
const scene4BT = document.querySelector("#scene4BT")

//Scene5 Elements
const scene5 = document.querySelector("#scene5");

//Scene6 Elements
const scene6 = document.querySelector("#scene6");

//Scene7 Elements
const scene7 = document.querySelector("#scene7");
const biker = document.querySelector("#biker")
const credits = document.querySelector("#credits")

//Buttons

//Next Buttons
const goScene2Btn = document.querySelector("#goscene2");
const goScene3Btn = document.querySelector("#goscene3");
const goScene4Btn = document.querySelector("#goscene4");
const goScene5Btn = document.querySelector("#goscene5");
const goScene6Btn = document.querySelector("#goscene6");
const goScene7Btn = document.querySelector("#goscene7");

//Start Button
const startPosterBtn = document.querySelector("#startposter");
const startBtn = document.querySelector("#startgame")

//Restart Button
const restartBtn = document.querySelector("#restart")

//Variable

//Elements
var mySpaceShip;
var myAstroid = [];
var myDistance;
var typeSpeed = 50;
var winDistance = 1000;

//Sounds
var scene1BGsound;
var scene2Thrust;
var scene3BGsound;
var scene3Thrust;
var scene3crashSound;
var phoneSound1;
var phoneSound2;
var scene4BTsound;
var scene4BGSound;
var scene5Phone;
var scene6BGsound;

//Counters
var btnCount = 0;
var myRestart = 0;
var scene4Click = 0;
var dustbinCount = 0;
var stoneCount = 0;
var cupboardCount = 0;
var txt1 = 0;
var txt2 = 0;
var txt3Start = 0;
var txt3End = 0;
var txt4 = 0;
var txt5 = 0;

//Textbubbles Content
var txtScene1 = 'The year is 1982, E.T. and his buddy terrestial aka B.T. have just landed on Earth for a diplomatic mission. Unfortunatly for them, they encountered som nasty alien hunters!';

var txtScene2 = "Luckily for B.T. he managed his way back to the ship on time but little does he know, E.T.'s stuck on Earth";

var txtScene3Start = 'Help B.T. escape Earth and avoid the on-coming asteroid field! Reach 1000 light years to continue..';

var txtScene3End = 'Congratulations!! You made it through the asteroid field.';

var txtScene4 = "Thanks for the steady hand pilot! I almost died there. If it's not too much trouble I need another favor.. Can you help me look for my friend E.T on the ship? I can't find him anywhere.";

var txtScene5 = "The phone rings... Who could it be!?";


//Add Event Listeners to Buttons

//Next Buttons
goScene2Btn.addEventListener("click", goScene2);
goScene3Btn.addEventListener("click", goScene3);
goScene4Btn.addEventListener("click", goScene4);
goScene5Btn.addEventListener("click", goScene5);
goScene6Btn.addEventListener("click", goScene6);
goScene7Btn.addEventListener("click", goScene7);

//Start Buttons
startPosterBtn.addEventListener("click", startPoster);
startBtn.addEventListener("click", startGame)

//    Restart Button
restartBtn.addEventListener("click", restartGame)

//Audio functions

//Single Playthrough
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

//Infinite Loop
function loopSound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", "true")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}



//Start Poster / Code for Scene 1
function startPoster() {
    scene1BGsound = new loopSound("audio/scene1BGsound.mp3");
    scene1BGsound.play();
    startPosterBtn.classList.add("hide")
    var scene1Txt = document.getElementById('text1');
    scene1TxtBubble.classList.remove("hide")
    var scene1Str = scene1Txt.innerHTML;
    scene1Txt.classList.remove("hide");
    scene1Txt.innerHTML = '';
    setInterval(function () {
        txt1 = txt1 + 1;
        scene1Txt.innerHTML = scene1Str.slice(0, txt1)
    }, 70);
    setTimeout(runScene1, (txtScene1.length * 70))
}


function runScene1() {
    scene1BT.classList.add("scene1run")
    setTimeout(nxtBtnAppear1, 3000);
}

function nxtBtnAppear1() {
    goScene2Btn.classList.remove("hide");
    goScene2Btn.classList.add("appear");
}

//Create Function for Scene 1 Next Button / Code for Scene 2
function goScene2() {
    goScene2Btn.classList.add("hide")
    scene1.classList.add("hide");
    scene2.classList.remove("hide");
    var scene2Txt = document.getElementById('text2');
    var scene2Str = scene2Txt.innerHTML;
    scene2Txt.classList.remove("hide");
    scene2Txt.innerHTML = '';
    setInterval(function () {
        txt2 = txt2 + 1;
        scene2Txt.innerHTML = scene2Str.slice(0, txt2)
    }, 70);
    setTimeout(runScene2, (txtScene2.length * 70))
}


function runScene2() {
    scene2BT.classList.add("btrun");
    scene2SpaceShip.classList.add("spaceshipblastoff");
    setTimeout(nxtBtnAppear2, 5500);
    setTimeout(scene2thrust, 2500)
}

function nxtBtnAppear2() {
    goScene3Btn.classList.remove("hide");
    goScene3Btn.classList.add("appear");
}

function scene2thrust() {
    document.querySelector("audio").volume = 0.5;
    scene2Thrust = new sound("audio/thrust.mp3");
    scene2Thrust.play()
    setTimeout(stopThrust, 2500)
}

function stopThrust() {
    scene2Thrust.stop();
    document.querySelector("audio").volume = 1;
}
//Create Function for Scene 2 Next Button / Code for Scene 3
function goScene3() {
    document.querySelector("audio").volume = 0.5;
    scene2.classList.add("hide");
    scene3.classList.remove("hide");
    var scene3StartTxt = document.getElementById('text3start');
    var scene3StartStr = scene3StartTxt.innerHTML;
    scene3StartTxt.classList.remove("hide");
    scene3StartTxt.innerHTML = '';
    setInterval(function () {
        txt3Start = txt3Start + 1;
        scene3StartTxt.innerHTML = scene3StartStr.slice(0, txt3Start)
    }, 70);
    setTimeout(runScene3Start, (txtScene3Start.length * 70))
}


function runScene3Start() {
    startBtn.classList.remove("hide");
    startBtn.classList.add("appear")
}

function runScene4() {
    goScene4Btn.classList.remove("hide");
    goScene4Btn.classList.add("appear");
}

//Create Function for Scene 3 Next Button / Code for Scene 4
function goScene4() {
    scene3.classList.add("hide");
    scene4.classList.remove("hide");
    scene4BGSound = new loopSound("audio/bg_sound.mp3");
    scene4BGSound.play();
    scene3BGsound.stop();
    setTimeout(activateScene4, 1000)
}

//Create Function for Scene 4 Next Button / Code for Scene 5
function goScene5() {
    phoneSound2 = new sound("audio/scene_5_telephone.mp3");
    phoneSound2.play()
    phoneSound1.stop();
    scene4.classList.add("hide");
    scene5.classList.remove("hide");
    setTimeout(nxtBtnAppear5, 2000);
}

function nxtBtnAppear5() {
    goScene6Btn.classList.remove("hide");
    goScene6Btn.classList.add("appear");
}

//Create Function for Scene 5 Next Button / Code for Scene 6
function goScene6() {
    phoneSound2.stop();
    phoneSound1.stop();
    scene4BGSound.stop();
    scene6BGsound = new loopSound("audio/scene6-7BGaudio.mp3");
    scene6BGsound.play();
    scene5.classList.add("hide");
    scene6.classList.remove("hide");
    setTimeout(nxtBtnAppear6, 6000);
}

function nxtBtnAppear6() {
    goScene7Btn.classList.remove("hide");
    goScene7Btn.classList.add("appear");
}

//Create Function for Scene 6 Next Button / Code for Scene 7
function goScene7() {
    scene6.classList.add("hide");
    scene7.classList.remove("hide");
    biker.classList.add("gobiker");
    credits.classList.add("creditsroll");
}


// SCENE 4 JS //

//Click BT to show text and play BT audio and lowers BG audio
function activateScene4() {
    scene4txt.classList.remove("hide");
    document.querySelector("audio").volume = 0.4;
    scene4BTsound = new loopSound("audio/bt_voice.mp3");
    scene4BTsound.play()
    var scene4Txt = document.getElementById('text4');
    var scene4Str = scene4Txt.innerHTML;
    scene4Txt.classList.remove("hide");
    scene4Txt.innerHTML = '';
    setInterval(function () {
        txt4 = txt4 + 1;
        scene4Txt.innerHTML = scene4Str.slice(0, txt4)
    }, 70);
    setTimeout(runScene4Click, (txtScene4.length * 70))
}



//Click text to hide text and BT plus play ambient audio - plus initiate clickability of other objects
function runScene4Click() {
    scene4BTsound.stop()
    document.querySelector("audio").volume = 1;
    scene4txt.classList.add("fadetxt");
    scene4BT.classList.add("fadeBT");
    dustbin.classList.add("glow");
    stone.classList.add("glow");
    cupboard.classList.add("glow");
    cupboard.addEventListener("click", clickCupboard);
    stone.addEventListener("click", clickStone);
    dustbin.addEventListener("click", clickDustbin);
    dustbin.classList.add("dustbinshake");
    stone.classList.add("stoneshake");
    cupboard.classList.add("cupboardshake")
}

//Click dustbin adds to individual counter plus phone counter - can only be clicked once
function clickDustbin() {
    if (dustbinCount == 0) {
        dustbinCount++;
        scene4Click++;
        dustbin.classList.remove("glow");
        dustbin.classList.add("fadetxt");
    } else {}
}


//Click cupboard adds to individual counter plus phone counter - can only be clicked once
function clickCupboard() {
    if (cupboardCount == 0) {
        cupboardCount++;
        scene4Click++;
        cupboard.classList.remove("glow");
        cupboard.classList.add("fadetxt");
    } else {}
}

//Click stone adds to individual counter plus phone counter - can only be clicked once
function clickStone() {
    if (stoneCount == 0) {
        stoneCount++;
        scene4Click++;
        stone.classList.remove("glow");
        stone.classList.add("fadetxt");
    } else {}
}

//Phone rings when counter is at 3
var phoneCheck = setInterval(function () {
    if (scene4Click >= 3) {
        document.querySelector("audio").volume = 0.3;
        phoneSound1 = new loopSound("audio/scene_5_telephone.mp3");
        phoneSound1.play();
        goScene5Btn.classList.remove("hide");
        goScene5Btn.classList.add("appear");
        clearInterval(phoneCheck);
    } else {

    }
}, 1000)


// SCENE 3 JS //

//Functions that Initiate all Game Components
function startGame() {
    startBtnBox.classList.add("hide")
    startBtn.classList.add("hide")
    scene1BGsound.stop();
    // Audio
    scene3BGsound = new sound("audio/BGaudio.mp3")
    scene3BGsound.play();
    scene3Thrust = new sound("audio/thrust.mp3")
    controlBox.classList.remove("hide");
    controlBox.classList.add("appear");
    setTimeout(initiateGame, 2000)
    setTimeout(hideControls, 3000)
}

function hideControls() {
    controlBox.classList.remove("appear")
    controlBox.classList.add("fadetxt");


}

function initiateGame() {
    startPage.classList.add("hide")

    //    Create Canvas
    myGameArea.start();
    //    Create Spaceship
    mySpaceShip = new component(50, 30, "images/spaceship.png", 10, 400, "image");
    //    Distance Traveled (Score)
    myDistance = new component("25px", "Consolas", "white", 1280 * 0.55, 40, "text")
}

//Create Canvas Function
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1280 * 0.75;
        this.canvas.height = 1024 * 0.75;
        this.context = this.canvas.getContext("2d");
        main.insertBefore(this.canvas, main.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

        // Key Listeners
        window.addEventListener("keydown", function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener("keyup", function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

//Create Spaceship Function
function component(width, height, color, x, y, type) {
    this.type = type;
    if (this.type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.5;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height)
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX -= this.gravity;
        this.y += this.speedY;
        this.hitSides();
    }
    // Adds solid walls to the canvas so that the spaceship can't leave the screen
    this.hitSides = function () {
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > myGameArea.canvas.width - this.width) {
            this.x = myGameArea.canvas.width - this.width;
        }
        if (this.y > myGameArea.canvas.height - this.height) {
            this.y = myGameArea.canvas.height - this.height;
        }
        if (this.y < 50) {
            this.y = 50;
        }
    }

    // Adds a crash function when to objects collide
    this.crashWith = function (otherObj) {
        var shipLeft = this.x;
        var shipRight = this.x + (this.width);
        var shipTop = this.y;
        var shipBtm = this.y + (this.height);
        var astroidLeft = otherObj.x;
        var astroidRight = otherObj.x + (otherObj.width);
        var astroidTop = otherObj.y;
        var astroidBtm = otherObj.y + (otherObj.height);
        var crash = true;
        if (shipLeft > astroidRight || shipRight < astroidLeft || shipTop > astroidBtm || shipBtm < astroidTop) {
            crash = false;
        }
        return crash
    }
}

//Makes the Game Run (by deleting and adding frames)
function updateGameArea() {
    var x, y;
    for (i = 0; i < myAstroid.length; i += 1) {
        if (mySpaceShip.crashWith(myAstroid[i])) {
            myGameArea.stop();
            myRestart += 1;
        }
    }

    myGameArea.clear();
    myGameArea.frameNo += 1;
    //    Generates new astroids for three different frameNo
    if (myGameArea.frameNo < 300) {
        if (myGameArea.frameNo == 20 || everyInterval(400)) {
            x = myGameArea.canvas.width;
            minDimension1 = 25;
            maxDimension1 = 50;

            dimension1 = Math.floor(Math.random() * (maxDimension1 - minDimension1 + 1) + minDimension1);

            minGap = 50;
            maxGap = 800;
            gap1 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension1, dimension1, "images/asteroidSmall.png", x, gap1, "image"));

        }
        if (myGameArea.frameNo == 10 || everyInterval(150)) {
            x = myGameArea.canvas.width;

            minDimension2 = 75;
            maxDimension2 = 150;

            dimension2 = Math.floor(Math.random() * (maxDimension2 - minDimension2 + 1) + minDimension2);

            minGap = 50;
            maxGap = 800;

            gap2 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension2, dimension2, "images/asteroidMedium.png", x, gap2, "image"));
        }
        if (myGameArea.frameNo == 1 || everyInterval(550)) {
            x = myGameArea.canvas.width;

            minDimension3 = 150;
            maxDimension3 = 300;

            dimension3 = Math.floor(Math.random() * (maxDimension3 - minDimension3 + 1) + minDimension3);

            minGap = 50;
            maxGap = 800;

            gap3 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension3, dimension3, "images/asteroidBig.png", x, gap3, "image"));
        }
    } else if (myGameArea.frameNo < 1300) {
        if (myGameArea.frameNo == 1 || everyInterval(75)) {
            x = myGameArea.canvas.width;
            minDimension1 = 25;
            maxDimension1 = 50;

            dimension1 = Math.floor(Math.random() * (maxDimension1 - minDimension1 + 1) + minDimension1);

            minGap = 50;
            maxGap = 800;
            gap1 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension1, dimension1, "images/asteroidSmall.png", x, gap1, "image"));

        }
        if (myGameArea.frameNo == 1 || everyInterval(180)) {
            x = myGameArea.canvas.width;

            minDimension2 = 75;
            maxDimension2 = 150;

            dimension2 = Math.floor(Math.random() * (maxDimension2 - minDimension2 + 1) + minDimension2);

            minGap = 50;
            maxGap = 800;

            gap2 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension2, dimension2, "images/asteroidMedium.png", x, gap2, "image"));
        }
        if (myGameArea.frameNo == 1 || everyInterval(250)) {
            x = myGameArea.canvas.width;

            minDimension3 = 150;
            maxDimension3 = 300;

            dimension3 = Math.floor(Math.random() * (maxDimension3 - minDimension3 + 1) + minDimension3);

            minGap = 50;
            maxGap = 800;

            gap3 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension3, dimension3, "images/asteroidBig.png", x, gap3, "image"));
        }
    } else if (myGameArea.frameNo < 9000) {
        if (myGameArea.frameNo == 1 || everyInterval(25)) {
            x = myGameArea.canvas.width;
            minDimension1 = 25;
            maxDimension1 = 50;

            dimension1 = Math.floor(Math.random() * (maxDimension1 - minDimension1 + 1) + minDimension1);

            minGap = 50;
            maxGap = 800;
            gap1 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension1, dimension1, "images/asteroidSmall.png", x, gap1, "image"));

        }
        if (myGameArea.frameNo == 1 || everyInterval(60)) {
            x = myGameArea.canvas.width;

            minDimension2 = 75;
            maxDimension2 = 150;

            dimension2 = Math.floor(Math.random() * (maxDimension2 - minDimension2 + 1) + minDimension2);

            minGap = 50;
            maxGap = 800;

            gap2 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension2, dimension2, "images/asteroidMedium.png", x, gap2, "image"));
        }
        if (myGameArea.frameNo == 1 || everyInterval(140)) {
            x = myGameArea.canvas.width;

            minDimension3 = 150;
            maxDimension3 = 300;

            dimension3 = Math.floor(Math.random() * (maxDimension3 - minDimension3 + 1) + minDimension3);

            minGap = 50;
            maxGap = 800;

            gap3 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension3, dimension3, "images/asteroidBig.png", x, gap3, "image"));
        }
    } else if (myGameArea.frameNo < 9000) {
        if (myGameArea.frameNo == 1 || everyInterval(3)) {
            x = myGameArea.canvas.width;
            minDimension1 = 20;
            maxDimension1 = 200;

            dimension1 = Math.floor(Math.random() * (maxDimension1 - minDimension1 + 1) + minDimension1);

            minGap = 50;
            maxGap = 800;
            gap1 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension1, dimension1, "green", x, gap1));

        }
        if (myGameArea.frameNo == 1 || everyInterval(5)) {
            x = myGameArea.canvas.width;

            minDimension2 = 10;
            maxDimension2 = 150;

            dimension2 = Math.floor(Math.random() * (maxDimension2 - minDimension2 + 1) + minDimension2);

            minGap = 50;
            maxGap = 800;

            gap2 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension2, dimension2, "red", x, gap2));
        }
        if (myGameArea.frameNo == 1 || everyInterval(3)) {
            x = myGameArea.canvas.width;

            minDimension3 = 50;
            maxDimension3 = 300;

            dimension3 = Math.floor(Math.random() * (maxDimension3 - minDimension3 + 1) + minDimension3);

            minGap = 50;
            maxGap = 800;

            gap3 = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

            myAstroid.push(new component(dimension3, dimension3, "pink", x, gap3));
        }
    }

    for (i = 0; i < myAstroid.length; i += 1) {
        if (myGameArea.frameNo < 300) {
            myAstroid[i].x -= 1;
        } else {
            myAstroid[i].x -= myGameArea.frameNo / 300;
        }
        myAstroid[i].angle += 1 * Math.PI / 180;
        myAstroid[i].update();
    }

    myDistance.text = "DISTANCE:  " + myGameArea.frameNo + " LY";
    myDistance.update();
    mySpaceShip.newPos();
    mySpaceShip.update();
    mySpaceShip.speedX = 0;
    mySpaceShip.speedY = 0;


    //Functions that determines movement speed (number) and direction (Y or X)

    //    UP
    if (myGameArea.keys && myGameArea.keys[38]) {
        mySpaceShip.image.src = "images/spaceshipFlame.png";
        mySpaceShip.speedY -= 2;
    } else {
        mySpaceShip.image.src = "images/spaceship.png"
    }

    //    DOWN
    if (myGameArea.keys && myGameArea.keys[40]) {
        mySpaceShip.image.src = "images/spaceshipFlame.png";
        mySpaceShip.speedY += 2;
    } else {
        mySpaceShip.image.src = "images/spaceship.png"
    }

    //Untag if we need left and right movement*

    //    LEFT
    if (myGameArea.keys && myGameArea.keys[37]) {
        mySpaceShip.image.src = "images/spaceshipFlame.png";
        mySpaceShip.speedX -= 2;

    } else {
        mySpaceShip.image.src = "images/spaceship.png"
    }

    //    RIGHT
    if (myGameArea.keys && myGameArea.keys[39]) {
        mySpaceShip.image.src = "images/spaceshipFlame.png";
        mySpaceShip.width = 87;
        mySpaceShip.speedX += (2 + mySpaceShip.gravity);
        scene3Thrust.play();

    } else {
        mySpaceShip.image.src = "images/spaceship.png"
        mySpaceShip.width = 50;
        scene3Thrust.stop()
    }

    if (myGameArea.frameNo == winDistance) {
        endPage.classList.remove("hide");
        const canvas = document.querySelector("canvas")
        canvas.classList.add("hide")
        document.querySelector("audio").volume = 0.5;
        myGameArea.stop();
        var scene3EndTxt = document.getElementById('text3end');
        var scene3EndStr = scene3EndTxt.innerHTML;
        scene3EndTxt.classList.remove("hide");
        scene3EndTxt.innerHTML = '';
        setInterval(function () {
            txt3End = txt3End + 1;
            scene3EndTxt.innerHTML = scene3EndStr.slice(0, txt3End)
        }, 70);
        setTimeout(runScene4, (txtScene3End.length * 70))
    }

    if (myRestart >= 1) {
        if (myGameArea.frameNo >= winDistance) {

        } else {
            scene3crashSound = new sound("audio/crash.mp3")
            scene3crashSound.play();
            scene3BGsound.stop();
            scene3Thrust.stop();
            restartBtn.classList.remove("hide")
        }
    }
}

function everyInterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function restartGame() {
    document.location.reload();
    clearInterval(interval);
}
