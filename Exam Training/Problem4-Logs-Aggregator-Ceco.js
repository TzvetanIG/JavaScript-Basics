function solve(input) {
    //nested function
    function getIndexOfUser(user, data) {
        var index = -1,
            i;

        for (i in data) {
            if (data[i].name === user) {
                index = i;
            }
        }

        return index;
    }


    var n = input[0],
        data = [],
        i;

    for (i = 1; i <= n; i += 1) {
        var userData = input[i].split(' '),
            userIndex = getIndexOfUser(userData[1], data);

        if (userIndex > -1) {
            data[userIndex].minutes += Number(userData[2]);
            if (data[userIndex].ip.indexOf(userData[0]) <= -1) {
                data[userIndex].ip.push(userData[0]);
            }
        } else {
            var  userObj = {};
            userObj.name =userData[1];
            userObj.ip = [userData[0]];
            userObj.minutes = Number(userData[2]);
            data.push(userObj);
        }
    }

    // sort ip
    for(i in data){
        data[i].ip.sort();
    }

    // sort user names
    data.sort(function(firstObj, secondObj){
        return firstObj.name < secondObj.name ? -1 : (firstObj.name > secondObj.name ? 1 : 0);
    });

    for(i in data){
        console.log('%s: %s [%s]', data[i].name, data[i].minutes, data[i].ip.join(', '));
    }

}

solve(['7',
        '192.168.0.11 peter 33',
        '10.10.17.33 alex 12',
        '10.10.17.35 peter 30',
        '10.10.17.34 peter 120',
        '10.10.17.34 peter 120',
        '212.50.118.81 alex 46',
        '212.50.118.81 alex 4']
);