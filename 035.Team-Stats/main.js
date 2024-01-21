const team = {
    _players: [{
            firstName: 'Kieran',
            lastName: 'Trippier',
            age: 33
        },
        {
            firstName: 'Bruno',
            lastName: 'Guimarães',
            age: 26
        },
        {
            firstName: 'Miguel',
            lastName: 'Almirón',
            age: 29
        }
    ],
    _games: [{
            opponent: 'Aston Villa',
            teamPoints: 5,
            opponentPoints: 1
        },
        {
            opponent: 'Man City',
            teamPoints: 0,
            opponentPoints: 1
        },
        {
            opponent: 'Liverpool',
            teamPoints: 1,
            opponentPoints: 2
        }
    ],
    // Getter Methods:
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    // Add new player to the team
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    // Add new game to the team
    addGame(opponentName, teamPoints, opponentPoints) {
        let game = {
            opponentName: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};
team.addPlayer('Dan', 'Burn', 31);
team.addPlayer('Callum', 'Wilson', 31);
team.addPlayer('Anthony', 'Gordon', 22);
console.log(team.players);
team.addGame('Brighton', 1, 3);
team.addGame('Brentford', 1, 0);
team.addGame('Sheffield Utd', 8, 0);
console.log(team.games);