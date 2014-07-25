function reverseWordsInString(str) {
    var words = str.split(' '),
        i;

    for(i in words){
        words[i] = words[i].split('').reverse().join('');
    }

    var resultString = words.join(' ');

    console.log(resultString);
}


reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');