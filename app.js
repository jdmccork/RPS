var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var userChose_img = document.getElementById("user-img");
var comChose_img = document.getElementById("computer-img");
console.log(comChose_img)

function getComChoice() {
  return Math.floor((Math.random() * 3) + 1);
}

function convert(value) {
  if (value === 1) return 'Rock';
  if (value === 2) return 'Paper';
  return 'Scissors';
}

function update(userChoice, comChoice, type, outcome) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(userChoice)} ${type} ${convert(comChoice)}. You ${outcome}!`;
}

function changeComImg(value){
  if (value === 1) comChose_img.src = 'images/rock.png', comChose_img.className="r";
  if (value === 2) comChose_img.src = 'images/paper.png', comChose_img.className="p";
  if (value === 3) comChose_img.src = 'images/scissors.png', comChose_img.className="s";
}

function changeUserImg(value){
  if (value === 1) userChose_img.src = 'images/rock.png', userChose_img.className="r";
  if (value === 2) userChose_img.src = 'images/paper.png', userChose_img.className="p";
  if (value === 3) userChose_img.src = 'images/scissors.png', userChose_img.className="s";
}

function game(userChoice) {
  const comChoice = getComChoice();
  changeComImg(comChoice)
  changeUserImg(userChoice)
  switch (comChoice) {
    case userChoice:
      update(userChoice, comChoice, ' draws with ', 'draw')
      break;
    case userChoice + 1:
    case userChoice - 2:
      computerScore ++;
      update(userChoice, comChoice, ' losses against ', 'lose')
      break;
    case userChoice - 1:
    case userChoice + 2:
      userScore ++;
      update(userChoice, comChoice, ' beats ', 'win')
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game(1);
  })

  paper_div.addEventListener('click', function(){
    game(2);
  })

  scissors_div.addEventListener('click', function(){
    game(3);
  })
}


main();
