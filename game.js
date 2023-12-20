const rockhand = document.getElementById('rock-hand');
const paperhand = document.getElementById('paper-hand');
const scissorhand = document.getElementById('scissor-hand');
const rockbtn = document.getElementById('rock-logo');
const paperbtn = document.getElementById('paper-logo');
const scissorbtn = document.getElementById('scissors-logo');
const comprock =document.getElementById('rock-comp');
const comppaper = document.getElementById('paper-comp');
const compscissor = document.getElementById('scissor-comp');
const yourscore = document.getElementById('yourscore');
const compscore = document.getElementById('compscore');
const win = document.getElementById('win');
const you = document.getElementById('you');
const thegame=document.getElementById('game');
const playagain = document.getElementById('playagain');
var operator = Math.floor(Math.random()*3); 
let pscore=0;
let cscore=0;
function letsplay(){
    rockbtn.onclick = () =>{
        rockhand.style.visibility = 'visible';
        paperhand.style.visibility = 'hidden';
        scissorhand.style.visibility = 'hidden';
        randomise();
        if (operator===0){
            cscore++;
        }else if (operator===1){
            pscore++;
        }
        yourscore.innerHTML=pscore;
        compscore.innerHTML= cscore;
        checkscore();
    }


    paperbtn.onclick = () =>{
        paperhand.style.visibility = 'visible';
        scissorhand.style.visibility = 'hidden';
        rockhand.style.visibility = 'hidden';
        randomise();
        if (operator===1){
            cscore++;
        }else if (operator==2){
            pscore++;
        }
        yourscore.innerHTML=pscore;
        compscore.innerHTML= cscore;
        checkscore();//recalling the function
    }

    scissorbtn.onclick = () =>{
        scissorhand.style.visibility = 'visible';
        rockhand.style.visibility = 'hidden';
        paperhand.style.visibility = 'hidden';
        randomise();
        if (operator===0){
            pscore++;
        }else if (operator===2){
            cscore++;
        }
        yourscore.innerHTML=pscore;
        compscore.innerHTML= cscore;
        checkscore();
    }



    function randomise(){
    

        comprock.style.visibility= 'hidden';
        compscissor.style.visibility = 'hidden';
        comppaper.style.visibility = 'hidden';

        operator = Math.floor(Math.random()*3);//using floor to get only 3 outpur(i.e. 0,1,2)

        if (operator===0){
            comppaper.style.visibility = 'visible';
        }
        else if (operator===1){
            compscissor.style.visibility = 'visible';
        }
        else if(operator===2){
            comprock.style.visibility='visible';
        }
    }
}
letsplay();
function checkscore(){
    if(pscore===5){
        you.style.visibility = 'visible';
        thegame.style.visibility = 'visible';
        win.innerHTML = 'Won ';
        playagain.style.visibility = 'visible';
        paperbtn.style.visibility = 'hidden';
        scissorbtn.style.visibility = 'hidden';
        rockbtn.style.visibility = 'hidden';
    }else if (cscore===5){
        you.style.visibility = 'visible';
        thegame.style.visibility = 'visible';
        win.innerHTML = 'Lose ';
        playagain.style.visibility = 'visible';
        paperbtn.style.visibility = 'hidden';
        scissorbtn.style.visibility = 'hidden';
        rockbtn.style.visibility = 'hidden';
    }
}

playagain.onclick = ()=>{
    location.href='./game.html';
}

    





