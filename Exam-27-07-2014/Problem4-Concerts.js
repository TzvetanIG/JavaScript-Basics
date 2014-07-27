function solve(input) {

    function getIndexOfCity(city, data) {
        var index = -1,
            i;

        for (i in data) {
            if (data[i].city === city) {
                index = i;
            }
        }

        return index;
    }

    function getIndexOfVenues(name, data) {
        var index = -1,
            i;

        for (i in data) {
            if (data[i].name === name) {
                index = i;
            }
        }

        return index;
    }

    function printBands(bands){
        var i;
        return '["' + bands.join('","') + '"]';
    }

    function printVenues(venues){
        return '"' + venues.name + '":'+ printBands(venues.bands);
    }

    function printCity(concert){
        var i;
        var venuesStrArr = [];

        for(i in concert.venues){
            venuesStrArr.push(printVenues(concert.venues[i]));
        }

        return '"' + concert.city + '":{'+ venuesStrArr.join(',') + '}';
    }

    var concerts = [],
        i;
    for (i in input) {
        var concertData = input[i].split(' | '),
            concertIndex = getIndexOfCity(concertData[1], concerts);

        if (concertIndex > -1) {
            var venuesIndex = getIndexOfVenues(concertData[3], concerts[concertIndex].venues);

            if (venuesIndex > -1) {
                if (concerts[concertIndex].venues[venuesIndex].bands.indexOf(concertData[0]) <= -1) {
                    concerts[concertIndex].venues[venuesIndex].bands.push(concertData[0]);
                }
            } else {
                concerts[concertIndex].venues.push({name: concertData[3], bands: [concertData[0]]});
            }

        } else {
            var concert = {};
            concert.city = concertData[1];
            concert.venues = [
                {name: concertData[3], bands: [concertData[0]]}
            ];
            concerts.push(concert);
        }
    }

    // sort cities
    concerts.sort(function (firstObj, secondObj) {
        return firstObj.city < secondObj.city ? -1 : (firstObj.city > secondObj.city ? 1 : 0);
    });

    // sort venues
    for (i in concerts) {

        concerts[i].venues.sort(function (firstObj, secondObj) {
            return firstObj.name < secondObj.name ? -1 : (firstObj.name > secondObj.name ? 1 : 0);
        });

        var j;
        for (j in concerts[i].venues) {
            concerts[i].venues[j].bands.sort();
        }

    }

    var cityStrArr = [];

    for (i in concerts) {
        cityStrArr.push(printCity(concerts[i]));
    }

    console.log('{%s}', cityStrArr.join(','));
}

solve([
    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);