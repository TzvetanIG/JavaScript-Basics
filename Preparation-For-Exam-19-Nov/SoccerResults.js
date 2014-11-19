function soccerResults(input) {
    function addResult(team, opponent, goalsScored, goalsConceded) {
        team.goalsScored += goalsScored;
        team.goalsConceded += goalsConceded;
        if(team.matchesPlayedWith.indexOf(opponent) < 0){
            team.matchesPlayedWith.push(opponent);
        }
    }

    var i;
    var teams = {};
    var match;
    var regex = /([A-Za-z ]+)\/([A-Za-z ]+):\s*(\d+)\s*-\s*(\d+)/;
    var team = {
        goalsScored: 0,
        goalsConceded: 0,
        matchesPlayedWith: []
    }

    for (i = 0; i < input.length; i++) {
        match = regex.exec(input[i]);
        var homeTeam = match[1].trim();
        var awayTeam = match[2].trim();
        var homeGoals = Number(match[3]);
        var awayGoals = Number(match[4]);

        if(!teams[homeTeam]) {
            teams[homeTeam] =  JSON.parse(JSON.stringify(team));
        }

        addResult(teams[homeTeam], awayTeam, homeGoals, awayGoals);

        if(!teams[awayTeam]) {
            teams[awayTeam] = JSON.parse(JSON.stringify(team));
        }

        addResult(teams[awayTeam], homeTeam, awayGoals, homeGoals);
    }

    var keys = Object.keys(teams);

    keys.sort();

    var sortedTeams = {};

    for(i = 0; i < keys.length; i++){
        sortedTeams[keys[i]] = teams[keys[i]];
        sortedTeams[keys[i]].matchesPlayedWith.sort();
    }

    console.log(JSON.stringify(sortedTeams));
}

soccerResults(
    ['Germany / Argentina: 1-0',
        'Brazil     / Netherlands: 0-3',
        'Netherlands / Argentina: 0-0',
        'Brazil / Germany: 1-7',
        'Argentina / Belgium: 1-0',
        'Netherlands / Costa Rica: 0-0',
        'France / Germany: 0-1',
        'Brazil / Colombia: 2-1']
);