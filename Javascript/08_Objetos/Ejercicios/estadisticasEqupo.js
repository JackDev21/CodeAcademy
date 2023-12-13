// Se crea un objeto 'team' que almacenará la información de un equipo deportivo
const team = {
    // Propiedades privadas para guardar la información de jugadores y juegos
    _players: [
        {
            firstName: "Jack",
            lastName: "Cantó",
            age: 36,
        },
        {
            firstName: "Lorena",
            lastName: "Lopez",
            age: 28,
        },
        {
            firstName: "Luna",
            lastName: "Gordita",
            age: 6,
        },
    ],
    _games: [
        {
            opponent: "Opponent1",
            teamPoints: 10,
            opponentPoints: 8,
        },
        {
            opponent: "Opponent2",
            teamPoints: 12,
            opponentPoints: 15,
        },
        {
            opponent: "Opponent3",
            teamPoints: 7,
            opponentPoints: 4,
        },
    ],

    // Getter para acceder a la lista de jugadores
    get players() {
        return this._players;
    },
    // Getter para acceder a la lista de juegos
    get games() {
        return this._games;
    },

    // Método para añadir un nuevo jugador al equipo
    addPlayer(newFirstName, newLastName, newAge) {
        // Se crea un objeto representando al nuevo jugador con los datos proporcionados
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName, // Corrección: 'lastName' en lugar de 'newLastName'
            age: newAge, // Corrección: 'age' en lugar de 'newAge'
        };
        // Se agrega el nuevo jugador al array '_players' del equipo
        this._players.push(newPlayer);
    },

    // Método para añadir un nuevo juego al registro del equipo
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        // Se crea un objeto representando el nuevo juego con la información proporcionada
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        // Se añade el nuevo juego al array '_games' del equipo
        this._games.push(newGame);
    }
};

// Se agregan datos nuevos al equipo mediante los métodos definidos
team.addGame("Titans", 100, 98); // Agrega un juego contra los "Titans" con puntuaciones
team.addPlayer("Bugs", "Bunny", 76); // Agrega un jugador llamado "Bugs Bunny" con 76 años

// Se muestran los datos actualizados del equipo en la consola
console.log(team.games); // Muestra la lista de juegos actualizada
console.log(team.players); // Muestra la lista de jugadores actualizada
