const report = document.createElement('div');
const dashboard = document.querySelector('.dashboard');
const buttons = document.querySelectorAll('.tools');
buttons.forEach(btn => btn.addEventListener('click', runButton));
const results = document.querySelector('#results');  
const subscore = document.querySelector('.subscore')
const hScoreboard = document.querySelector('#hScoreboard');
const cScoreboard = document.querySelector('#cScoreboard');
const nuke = document.createElement('button');
nuke.textContent = 'NUKE';
nuke.setAttribute('style', 'background-color: red; color: white;');
const totality = document.querySelector('body');

let hScore = 0;
let cScore = 0;

function computerSelect() {
    return Math.floor(Math.random() * 3);
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

function runButton(e) {
    compChoice = computerSelect();
    humanChoice = parseInt(e.target.getAttribute('data-value'));

    let message;
    switch ((2 * humanChoice + compChoice) % 3) {
        case 0:
            message =  "TIE GAME!";
            break;
        case 1:
            message = "YOU LOSE!";
            cScore++;
            break;
        case 2:
            message = "YOU WIN!";
            hScore++;
            break;
    }

    report.textContent = `You chose: ${(e.target.id).toUpperCase()}`;
    report.appendChild(document.createElement('br'));
    report.appendChild(document.createTextNode(`Computer chose: ${translate(compChoice)}`));
    report.appendChild(document.createElement('br'));
    report.appendChild(document.createElement('br'));
    report.appendChild(document.createTextNode(`${message}`));
    report.style.textAlign = 'center';
    results.appendChild(report);

    hScoreboard.textContent = `HUMAN: ${hScore}`;
    cScoreboard.textContent = `COMPUTER: ${cScore}`;
    if (cScore + hScore == 5) {gameOver()};
};

const score = document.querySelector('#score');
const victor = document.createElement('div');
victor.style.margin = '10px';

function gameOver() {
    buttons.forEach(btn => btn.disabled = true);
    victor.textContent = `GAME OVER. VICTOR: ${hScore > cScore ? 'HUMAN' : 'MACHINE'}.`;
    score.appendChild(victor);
    if (cScore > hScore) {
        dashboard.appendChild(nuke);
        nuke.addEventListener('click', ragequit);
    }
}

const reset = document.querySelector('#reset');

reset.addEventListener('click', newGame);

function newGame() {
    buttons.forEach(btn => btn.disabled = false);
    cScore = hScore = 0;
    hScoreboard.textContent = `HUMAN: ${hScore}`;
    cScoreboard.textContent = `COMPUTER: ${cScore}`;
    report.textContent = "";
    score.removeChild(victor);
}

function ragequit() {
    totality.textContent = '';
    timer = 3;
    const countdown = document.createElement('div');
    countdown.textContent = timer;
    countdown.style.fontSize = '48px';
    countdown.style.textAlign = 'center';
    totality.appendChild(countdown);
    totality.setAttribute('style', 'justify-content: center; align-items: center; background-color: black; color: white;');
    end = setInterval(() => {
        if (timer > 1) {
            timer -= 1;
            countdown.textContent = timer;
        } else {
            countdown.textContent = "";
            explosion();
            clearInterval(end);
        };
        }, 100);
};

bomb = document.createElement('div');

function explosion() {
    bomb.setAttribute('style', 'height: 100vmax; width: 100vmax;');
    totality.appendChild(bomb);
    bomb.style.animationName = 'boom';
    bomb.style.animationDuration = '2s';
    bomb.style.animationIterationCount = '1';
    bomb.style.animationFillMode = 'forwards';
}