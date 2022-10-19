const userChoiceDisplay = document.querySelector('.userDisplay');
const computerChoiceDisplay = document.querySelector('.computerDisplay');
const resultDisplay = document.querySelector('.resultDisplay');
const buttonsDiv = document.querySelector('.buttons');
const gameGrid = document.querySelector('.choices');
 
const choices = ['rock', 'paper', 'scissors'];

let userChoice;
let computerChoice;
let result;


const handleClick = (e) => {
    removeClasses();
    computerChoiceDisplay.style.visibility = "hidden";

    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = setIcon(userChoice);

    generateComputerChoice();
    result = getResult();
    let startTime = new Date().getTime();
    let interval = setInterval(() => {
        if(new Date().getTime() - startTime > 2000){
            clearInterval(interval);
            displayResult();
            return;
        }
    } , 1000);
   
   
  
   
    //RESULT DISPLAY HERE!
    
    //resultDisplay.innerHTML = result;
}

const generateComputerChoice = () => {

    resultDisplay.style.visibility = 'hidden';
  
    let startTime = new Date().getTime();
    let interval = setInterval(function () {
        if (new Date().getTime() - startTime > 2000) {
            clearInterval(interval);
            computerChoiceDisplay.classList.remove('spinner');
            resultDisplay.style.visibility = "visible"; 
            computerChoiceDisplay.innerHTML = setIcon(computerChoice); 
            return;
        }
       
        computerChoiceDisplay.innerHTML = "";
        computerChoiceDisplay.style.visibility = "visible";
        computerChoiceDisplay.classList.add('spinner');
        
    }, 200);

    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.innerHTML = setIcon(computerChoice);
    
    
    
}

const setIcon = (choice) => {
    let icon;
    if(choice == 'rock'){
        icon = "✊";
    }
    if (choice == 'paper'){
        icon = "✋";
    }
    if(choice == 'scissors'){
        icon = "✌️";
    }

    return icon;
}

for(let i = 0; i < choices.length; i ++){
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    buttonsDiv.appendChild(button);
}


const getResult = () => {

    if (userChoice === computerChoice) {
        result = "tie";
    }
   
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            result = "you lose";
        }
        if (computerChoice === 'scissors') {
            result = "you win";
        }
    }

    if (userChoice == 'paper') {
        if (computerChoice == 'rock') {
            result = "you win";
        }
        if (computerChoice == 'scissors') {
            result = "you lose";
        }
    }

    if (userChoice == 'scissors') {
        if (computerChoice == 'rock') {
            result = "you lose";
        }
        if (computerChoice == 'paper') {
            result = "you win";
        }
    }

 

    return result;
}

const displayResult = () => {
    removeClasses();
    if(result == "tie") {
        resultDisplay.innerHTML = result;
        computerChoiceDisplay.classList.add('tie');
        userChoiceDisplay.classList.add('tie');
    }

    if(result == "you win") {
        userChoiceDisplay.classList.add('winner');
        computerChoiceDisplay.classList.add('loser');
        resultDisplay.innerHTML = result;
    }

    if(result == 'you lose'){
        userChoiceDisplay.classList.add('loser');
        computerChoiceDisplay.classList.add('winner');
        resultDisplay.innerHTML = result;
    }
}

function removeClasses() {
    const list = ['winner', 'tie', 'loser'];
    userChoiceDisplay.classList.remove(...list);
    computerChoiceDisplay.classList.remove(...list);
    
} 