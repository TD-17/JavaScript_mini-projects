const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-message');
const notification = document.getElementById('notification');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'coding', 'programming', 'system'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// to show the hidden word
function displayWord() {
    wordEl.innerHTML = `
     ${selectedWord.split('').map(
         letter =>
          `<span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
           </span>
          `
     ).join('')}
     `;
    const innerWord = wordEl.innerText.replace(/\n/g, '');
    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations ! You won !! :)';
        popup.style.display = 'flex';
    }
}

displayWord();