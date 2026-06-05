function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || Array.isArray(player1) == true || typeof player2 !== 'object' || Array.isArray(player2) == true) {
        return 'Invalid';
    }

    const countA = player1.foul + player1.cardY + player1.cardR;
    const countB = player2.foul + player2.cardY + player2.cardR;

    if (countA < countB) {
        return player1.name;
    }
    else if (countA > countB) {
        return player2.name;
    }
    else {
        return 'Tie';
    }
}

const teamA =
{
    name: "Brazil",
    foul: 5,
    cardY: 1,
    cardR: 0
}

const teamB =
{
    name: "Argentina",
    foul: 7,
    cardY: 0,
    cardR: 0
}

let bestT = bestTeam(teamA, teamB);
console.log(bestT);

bestT = bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 });
console.log(bestT);

bestT = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 });
console.log(bestT);

bestT = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France");
console.log(bestT);