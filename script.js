let gameover = document.querySelector("#gameover")
let ball = document.querySelector("#ball");
let bx = Math.floor(Math.random()*90 + 5);
let by = 0;
ball.style.left = bx + "%";
let racket = document.querySelector("#racket");
let rx=40;
let scoreBox = document.querySelector("#score")
let score = 0;
let speedInput = document.querySelector("#speed")
let speed = speedInput.value

function gameplay() {
    speed = speedInput.value
    if (by>=90 && bx>rx-5 && bx<rx+20){
        hit()
    }
    else if(by >= 93){
        console.log(by)
        lost()
    }
    by = by+speed*0.1;
    ball.style.left = bx + "%"
    ball.style.top = by + "%"
    racket.style.left= rx + "%"
    scoreBox.innerText = score;
}
let Play = setInterval(gameplay,10)

function randby(){
    bx = Math.floor(Math.random()*90 + 5)
}
function hit() {
    randby()
    by=0
    score += 1
    console.log(score)
}
function lost() {
    clearInterval(Play)
    gameover.innerHTML=`<button id="replay" onclick="replay()">Play Again !</button>`
    gameover.classList.add("gameover")
}
function replay(){
    gameover.classList.remove("gameover")
    gameover.innerHTML=""
    score=0;
    by=0;
    randby()
    rx=40
    Play = setInterval(gameplay,10)
}


addEventListener("keydown",moveraquette)
function moveraquette(e){
    switch (e.keyCode){
        case 39 : {
            if (rx<80){
                rx+=5;
                break;
            }
            else{
                break;
            }
        }
        case 37 :{
            if (rx>0){
                rx-=5;
                break;
            }
            else{
                break;
            }
        }
    }
}