function replaceATag(inputString) {

// Commented out code works without HTML.
//    var re = />[^><]+</g,
//        matchs = inputString.match(re),
//        outputString = '',
//        i;
//
//    for (i in matchs) {
//        outputString += matchs[i].replace(/[<>\s]/g,'');
//    }
//
//    return outputString;

    alert(" Does not work with Mozilla!!! \n\n   Use Chrome!!!");

    var body = document.body;

    body.innerHTML = inputString;

    var result = body.innerText.replace(/\s/g, '');

    body.innerHTML = '<h1>Open console!!!</h1>'

    return result
}

console.log(replaceATag('<p>Hello</p><a href="http://w3c.org">W3C</a>'));