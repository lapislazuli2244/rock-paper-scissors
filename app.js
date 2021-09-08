let user_score = 0;
let computer_score = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
const win = (userChoice, computerChoice) => {
  user_score++;
  userScore_span.textContent = user_score;
  computerScore_span.textContent = computer_score;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);

  // const user_supscript = "(user)".fontsize(3).sup();
  // const comp_supscript = "(comp)".fontsize(3).sup();

  result_div.textContent = `${userChoice}  beats ${computerChoice}. You win !`;
};
const lose = (userChoice, computerChoice) => {
  computer_score++;
  userScore_span.textContent = user_score;
  computerScore_span.textContent = computer_score;
  result_div.textContent = `${computerChoice} beats ${userChoice}. Computer wins`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
};
const draw = (userChoice, computerChoice) => {
  userScore_span.textContent = user_score;
  computerScore_span.textContent = computer_score;
  result_div.textContent = `Its a draw !`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 500);
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
      break;
    case "scissorrock":
    case "rockpaper":
    case "paperscissor":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, computerChoice);
  }
};
game();

const main = () => {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissor_div.addEventListener("click", () => {
    game("scissor");
  });
};
main();
