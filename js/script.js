let pointsComputer = 0 ;
let pointsPlayer = 0;
let name = prompt('Welcome to our Game ⭐️. What is your name?');
const greetingsSelect = document.querySelector('h1')
greetingsSelect.textContent = `Welcome to our game ${name} , Good Luck 🍀 !`;
function playerFeedback(){ 
    let playerInput = prompt('Choose Rock 🪨, Paper 📄, or Scissor ✂️'); 
    if(playerInput === null ){
        playerExit = prompt('are you sure you want to leave? Y/N');
        if(playerExit === 'Y' || playerExit === 'yes' || playerExit === 'y'){
            alert('Thank you , bye');
        }
        if(playerExit === 'N' || playerExit === 'no' || playerExit === 'n'){
            playerInput = prompt('Choose Rock, Paper, or Scissor'); 
            return playerInput.replaceAll(" ","");
        }    
    }else{
        playerInput = playerInput.toUpperCase().trim();
        console.log(`You chose ${playerInput} `)
    }
    return playerInput.replaceAll(" ","");
}
function computerPlay(){
const election = ['ROCK', 'PAPER', 'SCISSOR'];
let computerElection = election[Math.floor(Math.random()*3)];
console.log(`Computer select: ${computerElection}`)
alert(`Computer select ${computerElection}`)
return computerElection;
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerFeedback();
    computerSelection = computerPlay();
   if(playerSelection === null){
        return alert( 'Lets play later 😊');
    } 
    else if((playerSelection == "SCISSOR") && (computerSelection == "SCISSOR")){ 
        pointsPlayer++;
        pointsComputer++;
        console.log('It is a draw!!');
        return alert('Tie, you both choose the same!🥳');   
    }else if((playerSelection == "ROCK") && (computerSelection == "ROCK")){
        pointsComputer++;
        pointsPlayer++;
        console.log('It is a draw!!');
        return alert('Tie, you both choose the same! 🥳');
    }else if((playerSelection == "PAPER") && (computerSelection == "PAPER")){
        pointsComputer++;
        pointsPlayer++;
        console.log('It is a Draw!!')
        return alert('Tie, you both choose the same!🥳');
    }else if((playerSelection == "ROCK") && (computerSelection == "SCISSOR")){
        pointsPlayer++;
        console.log(`You win. ${playerSelection} beats ${computerSelection}`);
       return alert(`You win!!${playerSelection} beats ${computerSelection}!🙌🏽`);
    }else if((playerSelection == "SCISSOR") && (computerSelection == "ROCK")){
        pointsComputer++;
        console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        return alert(`You lose. ${computerSelection} beats ${playerSelection}🥹`);
    }else if ((playerSelection == "PAPER") && (computerSelection == "ROCK")){
        pointsPlayer++;
        console.log(`You win. ${playerSelection} beats ${computerSelection}`);
        return alert(`You win!!. ${playerSelection} beats ${computerSelection}🙌🏽`);
    }else if((playerSelection == "ROCK") && (computerSelection == "PAPER")){
        pointsComputer++;
        console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        return alert(`You lose. ${computerSelection} beats ${playerSelection}🥹`);
    }
    else if((playerSelection == "SCISSOR") && (computerSelection == "PAPER")){
        pointsPlayer++;
        console.log(`You win. ${playerSelection} beats ${computerSelection}`);
        return alert(`You win. ${playerSelection} beats ${computerSelection}🙌🏽`);  
    }
    else if((playerSelection == "PAPER")&& (computerSelection == "SCISSOR")){
        pointsComputer++;
        console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        return alert(`You lose. ${computerSelection} beats ${playerSelection}🥹`);   
    } 
    else{
        alert('Nobody is playing.This round is skipped');
        console.log('Nobody is playing. This round is skipped 🤷🏽‍♀️');
    };
}
function game(){
   let round = 1;
    for (let round = 1; round <= 5 ; round++){       
      console.log(`*** Round ${round} ***`)
        playRound();
    }
      gameResults();
      newGame();
    }
    console.log(game());
function gameResults(){
    let resultsPlayer = `You have ${pointsPlayer} points!`;
    let resultsComputer = `The computer has ${pointsComputer} points!`;  
    if(pointsPlayer > pointsComputer){
         console.log( "Bravo, you won this game!\n" + resultsPlayer + resultsComputer
        );
    return alert(
        `Well done ${name}! You did it!! ${resultsPlayer} ${resultsComputer} 🙌🏽`
        );
    }
    else if(pointsPlayer === pointsComputer && 
        pointsPlayer !== 0 &&
        pointsComputer !== 0){
        console.log(
        "It was a tie. Try again!!! \n" + resultsPlayer + resultsComputer
        );
    return alert(
        `It was a tie.Try again!! \n ${resultsPlayer} ${resultsComputer} 🥳`
        );
    }else if(pointsPlayer === 0 && pointsComputer === 0){
        console.log(
            'The 5 rounds are finished with a score of 0. Try again and enter a valid option'
            );
    return alert(
            'The 5 rounds are finished with a score of 0. Play again and enter a valid option'
            );
    }else{
        console.log(
        'You lost! Play again to beat the computer! \n' + 
         resultsPlayer + resultsComputer
          );
    return alert(
            `You lost ${name}! Play again to beat the computer! ${resultsPlayer} ${resultsComputer} 🥹`
          );
        };            
}
function newGame(){
    let roundNew = window.prompt(`Do you want to try this game again ${name}? Y/N`);
    if( roundNew === 'Y' || roundNew === 'yes' || roundNew === 'y')
    {
        game();
    }else if(roundNew === 'N' || roundNew === 'no' || roundNew === 'n')
    {
    console.log('We understand, see you later!');
    return alert('Ok, see you later⭐️');         
    }
}
