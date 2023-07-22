const report = document.createElement('div');
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', runButton));
const results = document.querySelector('#results');  

let compChoice;
let humanChoice;

function computerSelect() {
    compChoice = Math.floor(Math.random() * 3);
}

function rpsEval(human, computer) {
    switch ((2 * human + computer) % 3) {
        case 0:
            return "TIE GAME!";
            break;
        case 1:
            return "YOU LOSE!";
            break;
        case 2:
            return "YOU WIN!";
            break;
    }
}

function runButton(e) {
    computerSelect();
    humanChoice = parseInt(e.target.getAttribute('data-value'));
    report.textContent = `YOU CHOSE: ${(e.target.id).toUpperCase()}! COMPUTER CHOSE: ${translate(compChoice)}!`;
    report.appendChild(document.createElement('br'));
    report.appendChild(document.createTextNode(`${rpsEval(humanChoice, compChoice)}`));
    report.style.textAlign = 'center';
    results.appendChild(report);
};

function translate(x) {
    let num = x;
    let translation;
    switch (num) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}
function rps(x = 5) {
    let hScore = 0;
    let cScore = 0;
    while (hScore + cScore < x) {
        humanSelect();
        computerSelect();
        console.log(`Computer chose: ${translate(compChoice)}`);
        switch ((2 * humanChoice + compChoice) % 3) {
            case 0:
                console.log("TIE GAME");
                break;
            case 1:
                console.log("YOU LOSE");
                cScore++;
                console.log(`HUMAN: ${hScore}, MACHINE: ${cScore}`);
                break;
            case 2:
                console.log("YOU WIN");
                hScore++;
                console.log(`HUMAN: ${hScore}, MACHINE: ${cScore}`);
                break;
        }
    }
    console.log(`GAME OVER. VICTOR: ${hScore > cScore ? 'HUMAN' : 'MACHINE'}.`)
}

