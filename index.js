let min=1;
let max=100;
let answer = Math.floor(Math.random()*(max-min+1)+min);

let running= true;
let guess;
let attempts= 0;

while(running){
    guess= window.prompt(`Guess the number between ${min} - ${max}`);
    guess= Number(guess);
    if(isNaN(guess)){
        console.log(`Enter a valid number!`);
    }
    else if(guess<min || guess>max){
        console.log(`Enter a valid number!`);            
    }
    else{
        attempts++;
        if(guess<answer){
            console.log(`TOO LOW! PLEASE TRY AGAIN`);
        }else if(guess>answer){
            console.log(`TOO HIGH! PLEASE TRY AGAIN`);
        }else{
            console.log(`Correct! You got the ${answer} after ${attempts} attempts.`);
            running = false;
        }        
    }
}