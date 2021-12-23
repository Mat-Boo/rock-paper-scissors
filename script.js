const rulesBtn = document.querySelector('.rulesTitle');
const rulesPage = document.querySelector('.rulesPage');
const closeRulesBtn = document.querySelector('.close');
const playIcons = document.querySelectorAll('.playIcon1');
const playGround1 = document.querySelector('.playGround1');
const playGround2 = document.querySelector('.playGround2');
const youPickedIcons = document.querySelectorAll('.youPicked .playIcon');
const housePickedIcons = document.querySelectorAll('.housePicked .playIcon');
const endGameBlock = document.querySelector('.endGameBlock');
const endGameMessage = document.querySelector('.endGameMessage');
const score = document.querySelector('.score');
const playAgainBtn = document.querySelector('.playAgainBtn');
let computerChoice = null;
let playerIcon = null;
let computerIcon = null;

let calculateScore = parseInt(score.innerText);

rulesBtn.addEventListener('click', () => {
    rulesPage.style.display = 'flex';
});

closeRulesBtn.addEventListener('click', () => {
    rulesPage.style.display = "none";
})

/* playIcons.forEach(item => {
    item.addEventListener('click', () => {
        playGround1.style.display = "none";
        playGround2.style.display = "flex";
        youPicked.prepend(item);
        computerChoice = Math.floor(Math.random()*3);
        housePicked.prepend(playIcons[computerChoice]);
        console.log(youPicked);
        console.log(item)
        console.log(housePicked);
        console.log(playIcons[computerChoice]);
    });
});
 */

const result = (player, computer) => {
    endGameBlock.style.display = 'block';
    switch (player) {
        case 'paper':
            switch (computer) {
                case 'paper':
                endGameMessage.innerText = 'DRAW';
                break;
                case 'scissors':
                endGameMessage.innerText = 'YOU LOSE';
                calculateScore = calculateScore - 1;
                score.innerText = calculateScore;
                break;
                case 'rock':
                endGameMessage.innerText = 'YOU WIN';
                calculateScore = calculateScore + 1;
                score.innerText = calculateScore;
                break;
                default:
                    null;
            }
            break;
        case 'scissors':
            switch (computer) {
                case 'paper':
                endGameMessage.innerText = 'YOU WIN';
                calculateScore = calculateScore + 1;
                score.innerText = calculateScore;
                break;
                case 'scissors':
                endGameMessage.innerText = 'DRAW';
                break;
                case 'rock':
                endGameMessage.innerText = 'YOU LOSE';
                calculateScore = calculateScore - 1;
                score.innerText = calculateScore;
                break;
                default:
                    null;
            }
            break;
        case 'rock':
            switch (computer) {
                case 'paper':
                endGameMessage.innerText = 'YOU LOSE';
                calculateScore = calculateScore - 1;
                score.innerText = calculateScore;
                break;
                case 'scissors':
                endGameMessage.innerText = 'YOU WIN';
                calculateScore = calculateScore + 1;
                score.innerText = calculateScore;
                break;
                case 'rock':
                endGameMessage.innerText = 'DRAW';
                break;
                default:
                    null;
            }
            break;
        default:
            null;
    }
}

playIcons.forEach(item => {
    item.addEventListener('click', () => {
        playGround1.style.display = "none";
        playGround2.style.display = "flex";
        youPickedIcons.forEach(i => {
            i.classList.add('removeIcon');
            if (item.id === i.id) {
                i.classList.remove('removeIcon');
                playerIcon = item.id;
            };
        });
        housePickedIcons.forEach(j => {
            j.classList.add('removeIcon');
        });
        computerChoice = Math.floor(Math.random()*3);
        housePickedIcons[computerChoice].classList.remove('removeIcon');
        computerIcon = housePickedIcons[computerChoice].id;
        result(playerIcon, computerIcon);
    });
});

playAgainBtn.addEventListener('click', () => {
    playGround1.style.display = "flex";
    playGround2.style.display = "none";
    endGameBlock.style.display = "none";
})

