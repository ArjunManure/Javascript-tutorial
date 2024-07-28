let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

const secret = "Arjun";
let guess = prompt("Enter your guess");
// while (guess !== secret) {
//     guess = prompt("Enter your guess");
// };
// console.log("congrats!!!")

while (true) {
    guess = prompt(guess);
    if (guess === secret) break;
}
console.log("YOU WIN!!!")