/* FUNZIONI PRINCIPALI */

function dice(){
    var dice1 = random();
    var dice2 = random();

    numberImg(dice1, dice2);
}


/* FUNZIONI RICHIAMATE DA ALTRE FUNZIONI */
function random(){
    var number = Math.floor(Math.random()*6) + 1;
    return number;

}

function numberImg(dice1, dice2){
    document.querySelector(".player1 .dice").setAttribute("src", "images/dice" + dice1 + ".png");
    document.querySelector(".player2 .dice").setAttribute("src", "images/dice" + dice2 + ".png");

    if(dice1 > dice2){
        document.querySelector(".title").innerHTML = "<img class='trophy' src='images/trophy.png' alt='trophy-image'> Winner Player 1!";
    }else if(dice1 < dice2){
        document.querySelector(".title").innerHTML = "Winner Player 2! <img class='trophy' src='images/trophy.png' alt='trophy-image'>";
    }else{
        document.querySelector(".title").innerHTML= "<img class='trophy' src='images/trophy.png' alt='trophy-image'> Tie! <img class='trophy' src='images/trophy.png' alt='trophy-image'>";
    }

}