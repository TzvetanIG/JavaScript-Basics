function DoubleRakiyaNumbers(input) {
    function isRakiyaNumber(number) {
        var pattern = /(\d{2})\d*\1/g;
        if((number.toString()).match(pattern)){
            return true;
        }
        return false;
    }

    var start = Number(input[0]);
    var end = Number(input[1]);
    var number;

    console.log('<ul>');
    for (number = start; number <= end; number++) {
        if (isRakiyaNumber(number)) {
            console.log(
                '<li>' +
                '<span class=\'rakiya\'>' + number + '</span>' +
                '<a href="view.php?id=' + number + '>View</a>' +
                '</li>');
        } else {
            console.log("<li><span class='num'>" + number + "</span></li>");
        }
    }
    console.log('</ul>');
}

DoubleRakiyaNumbers(
    [
        '11210',
        '11215'
    ]
)