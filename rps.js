const report = document.createElement('div');
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', alertme));

const results = document.querySelector('#results');  



function alertme(x) {
    computerSelect();
    report.textContent = `YOU CHOSE: ${(x.target.id).toUpperCase()}! COMPUTER CHOSE: ${translate(compChoice)}!`;
    report.appendChild(document.createElement('br'));
    report.appendChild(document.createTextNode('VICTOR:'));
    report.style.textAlign = 'center';
    results.appendChild(report);
};

let compChoice;
let humanChoice;
function computerSelect() {
    compChoice = Math.floor(Math.random() * 3);
}
function humanSelect() {
    while (true) {
        tool = prompt("Arm yourself!").toLowerCase();
        switch (tool) {
            case "rock":
                humanChoice = 0;
                break;
            case "paper":
                humanChoice = 1;
                break;
            case "scissors":
                humanChoice = 2;
                break;
            default:
                humanChoice = -1;
                break;
        }
        if (humanChoice < 0) {
            alert("INVALID INPUT, TRY AGAIN");
        }
        else {
            break;
        }
    }
}
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