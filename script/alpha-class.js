function handleKeyboardKeyUpEvent(event){
    const PlayerPressedKey = event.key;
    if(PlayerPressedKey === 'Escape'){
        gameOver()
    }
    //expected pressed key
    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    //check right or wrong key pressed
    if(PlayerPressedKey === expectedAlphabet){
const currentScore = getTextElementValue('current_score');
console.log(currentScore);
const updatedScore = currentScore + 1;
setTextElementByValue('current_score', updatedScore)
        // const currentScoreElement = document.getElementById('current_score');
        // const currentScoreValue = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreValue);
        // console.log( currentScore);
        
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }else{
        const currentLife = getTextElementValue('current_life');
        const updatedLife = currentLife - 1;
        setTextElementByValue('current_life', updatedLife);
        if(updatedLife === 0){
            gameOver()
        }
        // console.log('I have loss a point');
        // const currentLifeElement = document.getElementById('current_life');
        // const currentLifeValue = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeValue);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
       /*  if(PlayerPressedKey !== expectedAlphabet){
            setWrongPressKeyColor(PlayerPressedKey);
            return;
        }else{
            removeWrongPressKeyColor(PlayerPressedKey);
            continueGame()
        } */
    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);
//Start again
/* const startAgain = document.getElementById('start_again');
console.log('start again'); */

function continueGame(){
const alphabet = getARandomAlphabet();
//set randomly generated alphabet
const currentAlphabetElement = document.getElementById('current_alphabet');
currentAlphabetElement.innerText = alphabet;
//set background color
setBackgroundColorById(alphabet)
};

function play(){
 hideElement('home_screen');
 showElement('playGround');
    continueGame();
};
function gameOver(){
    hideElement('playGround');
    showElement('result');
    const lastScore = getTextElementValue('current_score');
    const resultScore = document.getElementById('result_score');
    resultScore.innerText = lastScore;
    const currentAlphabet = getElementTextById('current_alphabet');
    removeBackgroundColorById(currentAlphabet)
    
}
function startAgain(){
    hideElement('result');
    showElement('home_screen');
    setTextElementByValue('current_life', 5);
    setTextElementByValue('current_score', 0);
    
}

