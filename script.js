let ball = document.querySelector("#ball");
let bx = Math.floor(Math.random()*100)
let by = 0
ball.style.left = bx + "%"
let racket = document.querySelector("#racket")
let rx=0


function randby(){
    let bx = Math.floor(Math.random()*100)
    ball.style.left = bx + "%"
}
setInterval(()=>{
    by = by+0.5
    by=by%100
    if (by==0){
        randby()
    }
    ball.style.top = by + "%"
    racket.style.left= rx + "%"
},10)

addEventListener("keydown",moveraquette)
function moveraquette(e){
    switch (e.keyCode){
        case 39 : {
            if (rx<80){
                rx+=10;
                break;
            }
            else{
                break;
            }
        }
        case 37 :{
            if (rx>0){
                rx-=10;
                break;
            }
            else{
                break;
            }
        }
    }
}