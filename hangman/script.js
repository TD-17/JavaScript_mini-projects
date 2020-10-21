const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button');
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

// update wrong letter function
function updateWrongLettersEl() {
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // if lost
    if(wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost! :(';
        popup.style.display = 'flex'; 
    }
}

// show notification function
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// letters
window.addEventListener('keydown', e => {
    if(e.key >= 'a' && e.key <= 'z') {
        const letter = e.key;

        if(selectedWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        }else 
        {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLettersEl();
            }else 
            {
                showNotification();
            }
        }
    }
});

// play again
playAgainBtn.addEventListener('click', () => {
    // Empty array
    correctLetters.splice(0);
    wrongLetters.splice(0);
    // selecting new word
    selectedWord = words[Math.floor(Math.random() * words.length)];
    updateWrongLettersEl();
    popup.style.display = 'none';
    displayWord();
    
});

displayWord();