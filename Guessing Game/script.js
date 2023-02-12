let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "quit") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Guess again!");
  } else {
    guess = prompt("Too low! Guess again!");
  }
}
if (guess === "quit") {
  console.log(`Game over! The number was: ${targetNum}`);
} else {
  console.log(
    `You got it! It took you ${attempts} guesses. The number was ${targetNum}`
  );
}
