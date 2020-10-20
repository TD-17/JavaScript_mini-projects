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

// update wrong letter function
function updateWrongLettersEl() {
    console.log('Update wrong');
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
    console.log("Hello");
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
})

displayWord();