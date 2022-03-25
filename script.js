let ball = document.querySelector("#ball");
let bx = Math.floor(Math.random()*100);
let by = 0;
ball.style.left = bx + "%";
let racket = document.querySelector("#racket");
let rx=40;
scoreBox = document.querySelector("#score")
score = 0;


function randby(){
    bx = Math.floor(Math.random()*90 + 5)
}
setInterval(()=>{
    if (by>=90 && bx>rx-5 && bx<rx+20){
        hit()
    }
    update()
},10)
function update() {
    if (by==0){
        randby()
    }
    by = by+0.5
    by=by%95
    ball.style.left = bx + "%"
    ball.style.top = by + "%"
    racket.style.left= rx + "%"
    scoreBox.innerText = score;
}

function hit() {
    by=0
    score += 1
    console.log(score)
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