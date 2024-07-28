let maximum = parseInt(prompt("Enter the maximum number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!!"))
}
let targetNum = Math.floor(Math.random() * maximum + 1);

let guess = prompt("Enter your guess(Type 'q' to quit)");
attempt = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Your Guess is Too High");
        attempt++;
    }
    else if (guess < targetNum) {
        guess = prompt("Your Guess Is Too Low");
        attempt++;
    }

    else {
        guess = prompt("Enter a valid number");
    }
}
if (guess === "q") {
    console.log("OH NO. YOU QUIT!!")
}
else {
    console.log("YOU WIN. YAY!!!")
    console.log(`It took you ${attempt} attempts `)
}


