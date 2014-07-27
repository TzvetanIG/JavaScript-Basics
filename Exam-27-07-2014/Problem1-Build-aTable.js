function solve(input){
    function td(str){
        return '<td>' + str + '</td>';
    }

    function tr(str){
        return '<tr>' + str + '</tr>\n';
    }

    function table(str){
        return '<table>\n' + str + '</table>';
    }

    function getFibNumbers(endFib){
        var fibonacci = [];
        fibonacci[0] = 1;
        fibonacci[1] = 1;

        var i = 2;
        while(fibonacci[i-1] < endFib){
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
            i++;
        }

        return fibonacci;
    }

//----------------------------------------------------------------

    var start = Number(input[0]),
        end = Number(input[1]),
        header = tr('<th>Num</th><th>Square</th><th>Fib</th>'),
        fibonacciNum = getFibNumbers(end),
        rows = [],
        i,
        num,
        square,
        fib;

    for(i = start; i <= end; i++){
        num = i;
        square = i*i;
        if(fibonacciNum.indexOf(i) > -1) {
            fib = 'yes';
        } else {
            fib = 'no'
        }

        rows.push(tr(td(num) + td(square) + td(fib)));
    }



//--------- Output ----
    console.log(table(header +  rows.join('')));
}

solve(['55', '56']);