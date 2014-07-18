function findMostFreqWord(inputText) {

    var words = inputText.toLowerCase().split(/[\W]+/);

    if(words[words.length -1] === ''){
        words.pop();
    }

    var results = [];
    var i;

    for (i in words) {
        if (words[i] in results) {
            results[words[i]]++;
        } else {
            results[words[i]] = 1;
        }
    }

    var maxCountTimes = 0;
    var value;

    for (i = 0; i < results.length; i+=1){
        if(maxCountTimes < results[i]){
            maxCountTimes = results[i];
            value = i;
        }
    }

    return value  + ' (' + maxCountTimes + ' times)';
}

console.log(findMostFreqWord());
console.log(findMostFreqWord());
console.log(findMostFreqWord());