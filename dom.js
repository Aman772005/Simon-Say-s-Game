let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["yellow","green","red","purple"]

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started")
        started = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

let h3 = document.querySelector("h3");
function levelup(){
    userseq =[];
    level++;
    h3.innerText = `level ${level}`
    let ranidx = Math.floor(Math.random()*btns.length);
    let rancolo = btns[ranidx];
    let ranbtn = document.querySelector(`.${rancolo}`)
    gameseq.push(rancolo);
    console.log(gameseq);
    gameflash(ranbtn);
}

function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        h3.innerText = `game over! your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}





