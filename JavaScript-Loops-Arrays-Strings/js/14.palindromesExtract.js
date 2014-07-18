function findPalindromes(inputString) {
    var words = inputString.split(/[\b\W ]+/);
    return words;
}

findPalindromes('There is a man, his name was Bob.');