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
    var frequentWords = [];
    var key;

    for (key in results){
        if(maxCountTimes < results[key]){
            maxCountTimes = results[key];
            frequentWords =[];
            frequentWords.push(key);
        } else if (maxCountTimes === results[key]){
            frequentWords.push(key);
        }
    }

    frequentWords.sort();

    var outputString = '';
    i = 0;

    for(i in frequentWords){
        outputString +=  frequentWords[i] + ' -> ' + maxCountTimes + ' times \n'
    }

    return outputString;
}

console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));