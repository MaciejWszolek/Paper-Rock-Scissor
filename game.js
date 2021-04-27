// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers:0,
    wins:0,
    losses:0,
    draws:0
}

const game = {
    playerHand:"",
    aiHand:"",
}

const hands = [...document.querySelectorAll(".select img")];
const span = [...document.querySelectorAll('[data-summary]')];
const win = document.querySelector('.wins span')
const loss= document.querySelector('.losses span') 
const draw = document.querySelector('.draws span');
let pretendChoice = "";
const btn = document.querySelector('.start');
const playerChoice = function(){
    hands.forEach(function(hand, i){
    hand.addEventListener("click", function(){
    console.log(hands[i].dataset.option);
   hands.forEach(function(hand){
       hand.style.border=""
   })
    const hand = hands[i]
    
    hand.style.border = "5px solid blue";
    game.playerHand= hands[i].dataset.option;  
    const yourChoice = span[0]
    // console.log(yourChoice)
    yourChoice.textContent = game.playerHand;
    pretendChoice = 'contains'
      })
    })
}
const aiChoice = function(){
 const math =Math.floor(Math.random(hands.length)*3);
    game.aiHand = hands[math].dataset.option;
    const aiChoice = span[1]
    aiChoice.textContent = game.aiHand
    pretendChoice = "";
    
    
}
const rules = function (){
    if(game.aiHand==="nożyczki" && game.playerHand==="nożyczki" || game.aiHand==="kamień" && game.playerHand==="kamień" || game.aiHand==="papier" && game.playerHand==="papier"){
        gameSummary.draws++
        draw.textContent = gameSummary.draws;
        span[2].textContent="REMIS"
    }
    else if(game.aiHand==="nożyczki" && game.playerHand==="papier"|| game.aiHand==="kamień" && game.playerHand==="nożyczki" || game.aiHand==="papier"&&game.playerHand==="kamień"){
        gameSummary.losses++
        loss.textContent = gameSummary.losses;
        span[2].textContent= "PRZEGRAŁEŚ!"
    }
    else if( game.aiHand==="papier"&&game.playerHand==="nożyczki"|| game.aiHand==="kamień"&&game.playerHand==="papier"|| game.aiHand==="nożyczki"&&game.playerHand==="kamień"){
        gameSummary.wins++;
        win.textContent=gameSummary.wins
        span[2].textContent= "WYGRAŁEŚ!"
    }
}

const play = function(){
    
    btn.addEventListener("click",function(){
        if(pretendChoice === "") return alert("Żeby zagrać, musisz wybrać rękę");
        
        const numbers = document.querySelector('.numbers span');
 gameSummary.numbers++;
 numbers.textContent = gameSummary.numbers;
 hands.forEach(function(hand){
    hand.style.border="";
    
})

aiChoice();
rules();

    })
}
play()
playerChoice();






