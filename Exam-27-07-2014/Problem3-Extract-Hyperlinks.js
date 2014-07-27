function solve(input) {
    var html = input.join('');
    var re = /<a[^<>]+>/gi;
    var links = html.match(re);
    var hrefs = [];
    var i;
    for (i in links) {
        re = /[\W\w][ ]+href[ ]*=[ ]*([\w\W]*)/gi;
        var match = re.exec(links[i]);
        if (match !== null) {
            if (match.length < 2) {
                var href = match[0],
                    splitString = href.split(href[0]);
                hrefs.push(splitString[1].trim());
            } else {
                href = match[1];
                splitString = href.split('href=');
                hrefs.push(splitString[1].split('splitString[1]')[].trim());
            }

        }
    }

    console.log(hrefs.join('\n'));

}

//solve([
//    '<!DOCTYPE html>',
//        '<html>',
//            '<head>',
//                '<title>Hyperlinks</title>',
//                '<link href="theme.css" rel="stylesheet" />',
//            '</head>',
//            '<body>',
//                '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
//                'class="selected" href="/courses">Courses</a>',
//                '</li><li><a href =',
//                "'/forum' >Forum</a></li><li><a class=\"href\"",
//                'onclick="go()" href= "#">Forum</a></li>',
//                    '<li><a id="js" href =',
//                    '"javascript:alert(\'hi\')" class="new">click</a></li>',
//                    '<li><a id=\'nakov\' href =',
//                    "'http://www.nakov.com' class='new'>nak</a></li></ul>",
//                '<a href="#"></a>',
//                "<a id=\"href='jhj'\">href='fake'<img src='http://abv.bg/i.gif'",
//                "alt='abv'/></a><a href=\"#\">&lt;a href='hello'&gt;</a>",
//                '<!-- This code is commented:',
//                  '<a href="#commented">commentex hyperlink</a> -->',
//            '</body>'
//]);

solve(["<a id =\" href= jhj\" href=\" http://softuni.bg\" class=\"new\"></a>"]);

//solve(['<p>This text has no links</p>']);