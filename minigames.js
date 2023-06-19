const buttonStart = document.querySelector(".button-start")
const control = document.querySelector(".control")
const fade = document.querySelectorAll(".fade")
const container = document.querySelector(".container")
function rps(){
    let myScore = 0;
    const myScoreCounter = document.createElement("div")
    document.body.appendChild(myScoreCounter)
    const visualScore = document.createElement("span")
    myScoreCounter.classList.add("score")
    myScoreCounter.appendChild(visualScore)
    visualScore.classList.add("visualScore")
    visualScore.textContent = "Score: " + myScore
    const select = [
        {choice: "Rock", icon: "fa-regular fa-hand-back-fist", weak: 1},
        {choice: "Paper", icon: "fa-regular fa-hand", weak: 2},
        {choice: "Scissors", icon: "fa-regular fa-hand-scissors", weak: 0}
    ]

    const selectContainer = document.createElement("div")
    
    selectContainer.classList.add("selectContainer")
    const cpuText = document.createElement("span")
cpuText.classList.add("choiceCPU")
document.body.appendChild(cpuText)
const result = document.createElement("div")
const resultText = document.createElement("span")
document.body.appendChild(result)
result.appendChild(resultText)
result.classList.add("notification")
for(let i = 0; i < select.length; i++){
const choices = document.createElement("div")
choices.classList.add("choices")
selectContainer.appendChild(choices)
document.body.appendChild(selectContainer)
const choicesHeader = document.createElement("p")
choicesHeader.classList.add("choicesHeader")
choicesHeader.textContent = select[i].choice
choices.appendChild(choicesHeader)
const icons = document.createElement("i")
choices.appendChild(icons)
icons.classList.add(...select[i].icon.split(' '))

function start(){
    cpuText.innerHTML = "";
    const cpuChoice = "your Opponent Choice is " + select[cpuCNum].choice
    cpuText.textContent = cpuChoice

 

}
function vsChoice(number){
    let choiceCPU = Math.floor(Math.random() * 3);
    number = null; 
    number = choiceCPU
    return number
}
const cpuCNum = vsChoice();
let myNumber;

function compare() {
    resultText.innerHTML = ""
  if (myNumber === cpuCNum) {
    resultText.textContent = "It's a Tie";
  } else if (cpuCNum === select[myNumber].weak) {
    resultText.textContent = "You Lose";
  } else {
    myScore++;
    resultText.textContent = "You Win!";
       visualScore.textContent = "Score: " + myScore
  }
setTimeout(() => {
    choices.classList.remove("selected")
    const otherChoices = document.querySelectorAll(".choices:not(.selected)");
    otherChoices.forEach((choice) => {
      revealOther(choice);
      
    });
      function revealOther(choice) {
    if (choice.classList.contains("choices")) {
        choice.style.display = "flex";
    } else {
    
    }
  }

}, 2000);
}

choices.addEventListener("click", (e) => {
    start();
    
    const choiceIndex = select.findIndex((obj) => obj.choice === choicesHeader.textContent);
    myNumber = "";
    myNumber = choiceIndex;
    compare();
    choices.classList.add("selected");
    const otherChoices = document.querySelectorAll(".choices:not(.selected)");
    otherChoices.forEach((choice) => {
      hideOther(choice);
    });
  });
  function hideOther(choice) {
    if (choice.classList.contains("selected")) {
      choice.style.backgroundColor = "white";
    } else {
      choice.style.display = "none";
    }
  }
}

}


function generate(){
    
    const minigames = [
        {minigame: "Rock, Paper, Sccisors", src: "RPS.png"},
        {minigame: "Tick-Tack-Toe", src: "tiktaktoe.png"},
        {minigame:"Snake Game", src:"snake.png"}
    ]
    const game = document.createElement("div")
    document.body.appendChild(game)
    game.classList.add("minigames-container")
    for(let i = 0; i < minigames.length; i++){
     
        const containerM = document.createElement("div")
        game.appendChild(containerM)
        containerM.classList.add("games")
        const minigameTitle = document.createElement("p") 
        const minigamePic = document.createElement("img")
        minigamePic.classList.add("pic")
        containerM.appendChild(minigamePic)
        containerM.appendChild(minigameTitle)
        
        minigameTitle.classList.add("title-game")
        minigameTitle.textContent = minigames[i].minigame
        minigamePic.src = minigames[i].src
        containerM.addEventListener("click",(e)=>{
            function dissapear(){
                game.style.display = "none";
            }
            let index = minigames.indexOf(minigames[i]);

        if(typeof index === "number"){

            game.classList.add("fadeout")
           

            setTimeout(() => {
                dissapear();
                const welcome = document.createElement("h2")
                document.body.appendChild(welcome)
                welcome.classList.add("welcome")
                welcome.textContent = "Welcome to " + minigames[index].minigame
                if(index === 0){
                    rps();
                }
            }, 1000);
          
        }
    }, { once: true })
    }
}
buttonStart.addEventListener("click", (e) =>{
control.classList.add("jump")
buttonStart.disabled = true;
   fade.forEach(e => {
        e.classList.add("fadeout")
        setTimeout(() => {
            e.style.display = "none"
        }, 1000);
    });
setTimeout(() => {
    
    control.classList.remove("jump")
    buttonStart.disabled = false;

    generate();
}, 1000);
})