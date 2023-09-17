let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess;

let game = true;

while (game) {
  guess = Number(prompt("What is the number?"));
  if (Number.isNaN(guess)) {
    alert("Please pick a number");
    continue;
  } else if (guess === randomNumber) {
    alert("You guessed the correct number!");
    game = false;
    break;
  } else {
    alert("You picked the wrong number. Please try again.");
    continue;
  }
}
