function changeField(){
    if(isNaN(textField.value)) {
        textField.style.background = 'red';
        textField.disabled = true;
        setTimeout(getPreviousValue, 1000);
    } else {
        previousValue = textField.value;
   }
}

function getPreviousValue(){
    textField.value = previousValue;
    textField.style.background = '';
    textField.disabled = false;
    textField.focus();
}

var textField = document.getElementById('textField'),
    previousValue ='';

textField.addEventListener('input', changeField, false);
