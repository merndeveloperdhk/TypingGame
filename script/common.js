function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
};
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}
function setWrongPressKeyColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-500')
}
function removeWrongPressKeyColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-red-500', true)
};

function getTextElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
};
function setTextElementByValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText ;
    return text;
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

   //get random index between 0 - 25
   const randomNumber = Math.random() * 25;
   const index = Math.round(randomNumber);
   const alphabet = alphabets[index];
   return alphabet;
  

}